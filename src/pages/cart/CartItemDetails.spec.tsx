import { render, screen, fireEvent } from "@testing-library/react";
import { LocaleProvider } from "../../context/LocaleContext";
import { CartItem } from "../structures/cart.structures";
import { useCartStore } from "../stores/useCartStore";
import CartItemDetails from "./CartItemDetails";

const originalState = useCartStore.getState();
beforeEach(() => useCartStore.setState(originalState));

describe("<CartItemDetails />", () => {
  const customRender = (item?: CartItem) => {
    const testItem: CartItem = {
      coverage: 50.0,
      price: 15.0,
      ...item,
      product: {
        id: 1,
        name: "Test product",
        minCoverage: 10,
        maxCoverage: 90,
        risk: 0.3,
        ...item?.product,
      },
    };

    return render(
      <LocaleProvider locale="en-US">
        <CartItemDetails item={testItem} />
      </LocaleProvider>
    );
  };

  it("SHOULD render", () => {
    const { container } = customRender();

    expect(container).toMatchSnapshot();
  });

  it("SHOULD remove item from the cart", () => {
    const { items: initialItems } = useCartStore.getState();
    [
      {
        coverage: 50.0,
        price: 15.0,
        product: {
          id: 1,
          name: "Test product",
          minCoverage: 10,
          maxCoverage: 90,
          risk: 0.3,
        },
      },
      {
        coverage: 50.0,
        price: 15.0,
        product: {
          id: 2,
          name: "Test product 2",
          minCoverage: 10,
          maxCoverage: 90,
          risk: 0.3,
        },
      },
    ].forEach((item) => initialItems.push(item));

    customRender();

    const element = screen.getByTestId("remove-from-cart-button");
    fireEvent.click(element);

    const { items } = useCartStore.getState();

    expect(items.length).toBe(1);
  });
});
