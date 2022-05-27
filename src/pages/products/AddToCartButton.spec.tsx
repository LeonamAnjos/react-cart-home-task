import { render, fireEvent, screen } from "@testing-library/react";
import AddToCartButton from "./AddToCartButton";

describe("AddToCartButton", () => {
  it("SHOULD render", () => {
    const { container } = render(<AddToCartButton></AddToCartButton>);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD handle onClick event", () => {
    const handleClick = jest.fn();

    render(<AddToCartButton onClick={handleClick}></AddToCartButton>);

    const button = screen.getByTestId("add-to-cart-button");
    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
