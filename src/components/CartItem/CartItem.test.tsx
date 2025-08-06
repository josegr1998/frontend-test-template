import { render, screen, fireEvent } from "@testing-library/react";
import { CartItem } from "./CartItem";
import { Game } from "@/types/server/game";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  price: 59.99,
  genre: "Action",
  image: "/test-game.jpg",
  description: "Test Description",
  isNew: true,
};

describe("CartItem", () => {
  it("renders cart item details correctly", () => {
    const handleRemoveItem = jest.fn();
    render(<CartItem item={mockGame} handleRemoveItem={handleRemoveItem} />);

    expect(screen.getByRole("img", { name: "Test Game" })).toHaveAttribute(
      "src",
      expect.stringContaining("test-game.jpg"),
    );
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("displays NewBadge when item is new", () => {
    const handleRemoveItem = jest.fn();
    render(<CartItem item={mockGame} handleRemoveItem={handleRemoveItem} />);

    expect(screen.getByTestId("new-badge")).toBeInTheDocument();
  });

  it("does not display NewBadge when item is not new", () => {
    const handleRemoveItem = jest.fn();
    const notNewGame = { ...mockGame, isNew: false };
    render(<CartItem item={notNewGame} handleRemoveItem={handleRemoveItem} />);

    expect(screen.queryByTestId("new-badge")).not.toBeInTheDocument();
  });

  it("calls handleRemoveItem when delete icon is clicked", () => {
    const handleRemoveItem = jest.fn();
    render(<CartItem item={mockGame} handleRemoveItem={handleRemoveItem} />);

    const deleteButton = screen.getByRole("img", { name: "Delete Item" });
    fireEvent.click(deleteButton);

    expect(handleRemoveItem).toHaveBeenCalledWith("1");
  });
});
