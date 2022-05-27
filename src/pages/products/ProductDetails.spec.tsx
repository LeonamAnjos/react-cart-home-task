import { render, screen, fireEvent } from "@testing-library/react";
import { LocaleProvider } from "../../context/LocaleContext";
import { Product } from "../structures/product.structures";
import { useCartStore } from "../stores/useCartStore";
import ProductDetails from "./ProductDetails";

const originalState = useCartStore.getState();
beforeEach(() => {
  useCartStore.setState(originalState);
});

describe("<ProductDetails />", () => {
  const customRender = (product?: Product) => {
    const customProduct = {
      id: 1,
      name: "Test Product",
      minCoverage: 10,
      maxCoverage: 90,
      risk: 0.3,
      ...product,
    };

    return render(
      <LocaleProvider locale="en-US">
        <ProductDetails product={customProduct} />
      </LocaleProvider>
    );
  };

  it("SHOULD render", () => {
    const { container } = customRender();

    expect(container).toMatchSnapshot();
  });

  it("SHOULD add product to the cart", () => {
    customRender();

    const element = screen.getByTestId("add-to-cart-button");
    fireEvent.click(element);

    const { items } = useCartStore.getState();

    expect(items.length).toBe(1);
    expect(items[0].coverage).toBe(90);
    expect(items[0].price).toBe(27);
    expect(items[0].product.name).toBe("Test Product");
  });

  it("SHOULD change the coverage and price", () => {
    const { container } = customRender();

    const element = screen.getByTestId("coverage-slider");
    fireEvent.mouseDown(element, { clientX: -1 });

    expect(container).toMatchSnapshot();
  });
});
