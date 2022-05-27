import { render, fireEvent, screen } from "@testing-library/react";
import RemoveFromCartButton from "./RemoveFromCartButton";

describe("RemoveFromCartButton", () => {
  it("SHOULD render", () => {
    const { container } = render(<RemoveFromCartButton></RemoveFromCartButton>);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD handle onClick event", () => {
    const handleClick = jest.fn();

    render(<RemoveFromCartButton onClick={handleClick}></RemoveFromCartButton>);

    const button = screen.getByTestId("remove-from-cart-button");
    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
