import { render, screen } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";
import { useOrderSummary } from "./useOrderSummary";

jest.mock("./useOrderSummary");
const mockUseOrderSummary = useOrderSummary as jest.Mock;

describe("OrderSummary", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders order summary with items correctly", () => {
    mockUseOrderSummary.mockReturnValue({
      orderItems: [
        { name: "Game 1", price: 59.99 },
        { name: "Game 2", price: 49.99 },
      ],
      numberOfItemsLabel: "2 Items",
      totalPrice: 109.98,
    });

    render(<OrderSummary />);

    expect(screen.getByTestId("order-summary-items")).toHaveTextContent(
      "2 Items",
    );

    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();

    expect(screen.getByText("$109.98")).toBeInTheDocument();

    expect(screen.getByTestId("checkout-button")).toBeInTheDocument();
  });

  it("does not render checkout button when there are no items", () => {
    mockUseOrderSummary.mockReturnValue({
      orderItems: [],
      numberOfItemsLabel: "0 Items",
      totalPrice: 0,
    });

    render(<OrderSummary />);

    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.queryByTestId("checkout-button")).not.toBeInTheDocument();
  });
});
