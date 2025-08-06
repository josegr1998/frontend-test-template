import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Error } from "./Error";

describe("Error", () => {
  const mockResetErrorBoundary = jest.fn();
  const mockError = {
    message: "Test error message",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders error message and try again button", () => {
    render(
      <Error error={mockError} resetErrorBoundary={mockResetErrorBoundary} />,
    );

    expect(screen.getByText("Test error message")).toBeInTheDocument();
    expect(screen.getByTestId("try-again-button")).toBeInTheDocument();
  });

  it("calls resetErrorBoundary when try again button is clicked", async () => {
    render(
      <Error error={mockError} resetErrorBoundary={mockResetErrorBoundary} />,
    );

    const tryAgainButton = screen.getByTestId("try-again-button");
    await userEvent.click(tryAgainButton);

    expect(mockResetErrorBoundary).toHaveBeenCalledTimes(1);
  });
});
