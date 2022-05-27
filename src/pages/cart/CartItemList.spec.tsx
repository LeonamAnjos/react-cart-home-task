import { render } from "@testing-library/react";
import { LocaleProvider } from "../../context/LocaleContext";
import { CartItem } from "../structures/cart.structures";
import CartItemList from "./CartItemList";

describe("<CartItemList />", () => {
  const customRender = (items: CartItem[]) => {
    return render(
      <LocaleProvider locale="en-US">
        <CartItemList items={items} />
      </LocaleProvider>
    );
  };

  it("SHOULD render WHEN list is empty", () => {
    const { container } = customRender([]);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD render WHEN list is not empty", () => {
    const items: CartItem[] = [
      {
        product: {
          id: 1,
          name: "Test product 1",
          minCoverage: 10,
          maxCoverage: 90,
          risk: 0.3,
        },
        coverage: 80.0,
        price: 24.0,
      },
      {
        product: {
          id: 2,
          name: "Test product 2",
          minCoverage: 20,
          maxCoverage: 80,
          risk: 0.4,
        },
        coverage: 50.0,
        price: 20.0,
      },
    ];

    const { container } = customRender(items);

    expect(container).toMatchSnapshot();
  });
});
