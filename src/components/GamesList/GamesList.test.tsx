import { render, screen } from "@testing-library/react";
import { GamesList } from "./GamesList";
import { Game } from "@/types/server/game";

jest.mock("@/stores/cart/useCartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockUseCartStore = require("@/stores/cart/useCartStore")
  .useCartStore as jest.Mock;

const mockGames: Game[] = [
  {
    id: "1",
    name: "Test Game 1",
    price: 59.99,
    genre: "Action",
    image: "/test-game-1.jpg",
    description: "Test Description 1",
    isNew: true,
  },
  {
    id: "2",
    name: "Test Game 2",
    price: 49.99,
    genre: "RPG",
    image: "/test-game-2.jpg",
    description: "Test Description 2",
    isNew: false,
  },
];

describe("GamesList", () => {
  beforeEach(() => {
    mockUseCartStore.mockReturnValue({
      items: [],
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });
  });

  it("renders all games passed as props", () => {
    render(<GamesList games={mockGames} isLoadingNextPage={false} />);

    expect(screen.getByText("Test Game 1")).toBeInTheDocument();
    expect(screen.getByText("Test Game 2")).toBeInTheDocument();
  });

  it("renders loading indicator when loading next page", () => {
    render(<GamesList games={mockGames} isLoadingNextPage={true} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("does not render loading indicator when not loading next page", () => {
    render(<GamesList games={mockGames} isLoadingNextPage={false} />);

    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });

  it("renders empty list when no games provided", () => {
    render(<GamesList games={[]} isLoadingNextPage={false} />);

    expect(screen.queryByText("Test Game 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Game 2")).not.toBeInTheDocument();
  });
});
