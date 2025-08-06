import { render, screen } from "@testing-library/react";
import { CartItems } from "./CartItems";
import * as hooks from "./CartItems.hooks";
import { Game } from "@/types/game";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  price: 59.99,
  genre: "Action",
  image: "/test-game.jpg",
  description: "Test Description",
  isNew: true,
};

jest.mock("./CartItems.hooks");
const mockUseCartItems = hooks.useCartItems as jest.Mock;

describe("CartItems", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders empty cart message when there are no items", () => {
    mockUseCartItems.mockReturnValue({
      items: [],
      handleRemoveItem: jest.fn(),
      isHydrated: true,
    });

    render(<CartItems />);

    expect(screen.getByTestId("empty-cart-message")).toBeInTheDocument();
  });

  it("renders cart items when there are items", () => {
    mockUseCartItems.mockReturnValue({
      items: [mockGame],
      handleRemoveItem: jest.fn(),
      isHydrated: true,
    });

    render(<CartItems />);

    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("does not show empty cart message when not hydrated", () => {
    mockUseCartItems.mockReturnValue({
      items: [],
      handleRemoveItem: jest.fn(),
      isHydrated: false,
    });

    render(<CartItems />);

    expect(screen.queryByTestId("empty-cart-message")).not.toBeInTheDocument();
  });

  it("renders multiple cart items", () => {
    const secondGame = {
      ...mockGame,
      id: "2",
      name: "Another Game",
    };

    mockUseCartItems.mockReturnValue({
      items: [mockGame, secondGame],
      handleRemoveItem: jest.fn(),
      isHydrated: true,
    });

    render(<CartItems />);

    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("Another Game")).toBeInTheDocument();
  });
});
