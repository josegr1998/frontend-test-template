import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer, Toast } from "./Toast";
import { useToastStore } from "@/stores/toast/toastStore";

jest.mock("@/stores/toast/toastStore");
const mockUseToastStore = useToastStore as unknown as jest.Mock;

describe("Toast", () => {
  const mockToast = {
    id: "1",
    title: "Test Title",
    message: "Test Message",
    type: "success" as const,
  };

  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders toast with title and message", () => {
    render(<Toast toast={mockToast} onClose={mockOnClose} />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });

  it("renders correct icon based on toast type", () => {
    const successToast = { ...mockToast, type: "success" as const };
    const errorToast = { ...mockToast, type: "error" as const };
    const infoToast = { ...mockToast, type: "info" as const };

    const { rerender } = render(
      <Toast toast={successToast} onClose={mockOnClose} />,
    );
    expect(screen.getByText("✓")).toBeInTheDocument();

    rerender(<Toast toast={errorToast} onClose={mockOnClose} />);
    expect(screen.getAllByText("✕")).toHaveLength(2);

    rerender(<Toast toast={infoToast} onClose={mockOnClose} />);
    expect(screen.getByText("ℹ")).toBeInTheDocument();
  });

  it("calls onClose when dismiss button is clicked", async () => {
    render(<Toast toast={mockToast} onClose={mockOnClose} />);

    const dismissButton = screen.getByLabelText("Dismiss notification");
    await userEvent.click(dismissButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});

describe("ToastContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders multiple toasts", () => {
    const mockToasts = [
      {
        id: "1",
        title: "Success",
        message: "Operation successful",
        type: "success" as const,
      },
      {
        id: "2",
        title: "Error",
        message: "Something went wrong",
        type: "error" as const,
      },
    ];

    mockUseToastStore.mockReturnValue({
      toasts: mockToasts,
      removeToast: jest.fn(),
    });

    render(<ToastContainer />);

    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Operation successful")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("calls removeToast when toast is closed", async () => {
    const mockRemoveToast = jest.fn();
    mockUseToastStore.mockReturnValue({
      toasts: [
        {
          id: "1",
          title: "Test",
          message: "Test message",
          type: "success" as const,
        },
      ],
      removeToast: mockRemoveToast,
    });

    render(<ToastContainer />);

    const dismissButton = screen.getByLabelText("Dismiss notification");
    await userEvent.click(dismissButton);

    expect(mockRemoveToast).toHaveBeenCalledWith("1");
  });
});
