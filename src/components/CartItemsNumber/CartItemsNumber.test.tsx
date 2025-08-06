import { render, screen } from "@testing-library/react";
import { CartItemsNumber } from "./CartItemsNumber";
import { useCartStore } from "@/stores/cart/useCartStore";

jest.mock("@/stores/cart/useCartStore");

const mockUseCartStore = useCartStore as jest.MockedFunction<
  typeof useCartStore
>;

describe("CartItemsNumber", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays the number of items in cart", () => {
    mockUseCartStore.mockReturnValue({
      numberOfItems: 3,
    });

    render(<CartItemsNumber />);

    expect(screen.getByText("3 Items")).toBeInTheDocument();
  });

  it("displays singular 'Item' when there is 1 item", () => {
    mockUseCartStore.mockReturnValue({
      numberOfItems: 1,
    });

    render(<CartItemsNumber />);

    expect(screen.getByText("1 Item")).toBeInTheDocument();
  });

  it("does not display anything when cart is empty", () => {
    mockUseCartStore.mockReturnValue({
      numberOfItems: 0,
    });

    render(<CartItemsNumber />);

    expect(screen.queryByText("0 Item")).not.toBeInTheDocument();
  });
});
