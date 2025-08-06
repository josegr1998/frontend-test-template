import { render, screen, fireEvent } from "@testing-library/react";
import { Game } from "@/types/server/game";
import { GameCard } from "@/components/GameCard/GameCard";

jest.mock("@/stores/cart/useCartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockUseCartStore = require("@/stores/cart/useCartStore")
  .useCartStore as jest.Mock;

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  price: 59.99,
  genre: "Action",
  image: "/test-game.jpg",
  description: "Test Description",
  isNew: true,
};

describe("GameCard", () => {
  it("renders game details", () => {
    mockUseCartStore.mockReturnValue({
      items: [],
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });

    render(<GameCard game={mockGame} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining("test-game.jpg"),
    );
    expect(screen.getByText("ACTION")).toBeInTheDocument();
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
  });

  it("shows REMOVE FROM CART when game is in cart", () => {
    mockUseCartStore.mockReturnValue({
      items: [{ id: "1" }],
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });

    render(<GameCard game={mockGame} />);

    expect(screen.getByTestId("remove-from-cart-button")).toBeInTheDocument();
  });

  it("calls addItem when clicking ADD TO CART", () => {
    const addItem = jest.fn();

    mockUseCartStore.mockReturnValue({
      items: [],
      addItem,
      removeItem: jest.fn(),
    });

    render(<GameCard game={mockGame} />);

    const button = screen.getByTestId("add-to-cart-button");
    fireEvent.click(button);

    expect(addItem).toHaveBeenCalledWith(mockGame);
  });

  it("calls removeItem when clicking REMOVE FROM CART", () => {
    const removeItem = jest.fn();

    mockUseCartStore.mockReturnValue({
      items: [{ id: "1" }],
      addItem: jest.fn(),
      removeItem,
    });

    render(<GameCard game={mockGame} />);

    const button = screen.getByTestId("remove-from-cart-button");
    fireEvent.click(button);

    expect(removeItem).toHaveBeenCalledWith("1");
  });
});
