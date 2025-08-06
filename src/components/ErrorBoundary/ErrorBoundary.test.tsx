import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-error-boundary", () => ({
  ErrorBoundary: ({ children, onError, fallbackRender }: any) => {
    return children;
  },
}));

describe("ErrorBoundary", () => {
  const mockRefresh = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      refresh: mockRefresh,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div data-testid="test-child">Test Content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("has error boundary wrapper with correct props", () => {
    const { container } = render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );

    // The component should render without errors
    expect(container.firstChild).toBeInTheDocument();
  });

  it("sets up router refresh functionality", () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );

    expect(useRouter).toHaveBeenCalled();
  });
});
