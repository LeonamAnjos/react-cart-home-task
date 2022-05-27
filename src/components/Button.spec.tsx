import { render } from "@testing-library/react";
import ElementButton from "./Button";
import RemoveShoppingCart from "../icons/RemoveShoppingCart";

describe("ElementButton", () => {
  it("WHEN have text content", () => {
    const { container } = render(<ElementButton>{"Test"}</ElementButton>);

    expect(container).toMatchSnapshot();
  });

  it("WHEN have endIcon", () => {
    const { container } = render(
      <ElementButton endIcon={<RemoveShoppingCart />}>
        {"With end icon"}
      </ElementButton>
    );

    expect(container).toMatchSnapshot();
  });
});
