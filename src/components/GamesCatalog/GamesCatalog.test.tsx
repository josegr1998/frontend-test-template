import { render, screen } from "@testing-library/react";
import { GamesCatalog } from "./GamesCatalog";
import { Game } from "@/types/game";
import { GameCatalog } from "@/types/catalog";

jest.mock("@/stores/cart/useCartStore", () => ({
  useCartStore: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockUseCartStore = require("@/stores/cart/useCartStore")
  .useCartStore as jest.Mock;

const mockUseRouter = require("next/navigation").useRouter as jest.Mock;
const mockUseSearchParams = require("next/navigation")
  .useSearchParams as jest.Mock;

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

const mockInitialCatalog: GameCatalog = {
  games: mockGames,
  availableFilters: ["Action", "RPG"],
  totalPages: 1,
  currentPage: 1,
};

describe("GamesCatalog", () => {
  beforeEach(() => {
    mockUseCartStore.mockReturnValue({
      items: [],
      addItem: jest.fn(),
      removeItem: jest.fn(),
    });

    mockUseRouter.mockReturnValue({
      refresh: jest.fn(),
    });

    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue("All"),
    });
  });

  it("renders all games passed as props", () => {
    render(<GamesCatalog initialCatalog={mockInitialCatalog} />);

    expect(screen.getByText("Test Game 1")).toBeInTheDocument();
    expect(screen.getByText("Test Game 2")).toBeInTheDocument();
  });

  it("renders game cards with correct information", () => {
    render(<GamesCatalog initialCatalog={mockInitialCatalog} />);

    expect(screen.getByText("ACTION")).toBeInTheDocument();
    expect(screen.getAllByText("RPG")).toHaveLength(2); // One in dropdown, one in game card
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();
  });

  it("renders NEW badge only for new games", () => {
    render(<GamesCatalog initialCatalog={mockInitialCatalog} />);

    const newBadges = screen.getAllByTestId("new-badge");
    expect(newBadges).toHaveLength(1);
  });
});
