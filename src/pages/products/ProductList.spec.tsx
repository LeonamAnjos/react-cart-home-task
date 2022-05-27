import { render } from "@testing-library/react";
import { LocaleProvider } from "../../context/LocaleContext";
import { Product } from "../structures/product.structures";
import ProductList from "./ProductList";

describe("<ProductList />", () => {
  const customRender = (products: Product[]) => {
    return render(
      <LocaleProvider locale="en-US">
        <ProductList products={products} />
      </LocaleProvider>
    );
  };

  it("SHOULD render WHEN list is empty", () => {
    const { container } = customRender([]);

    expect(container).toMatchSnapshot();
  });

  it("SHOULD render WHEN list is not empty", () => {
    const products: Product[] = [
      {
        id: 1,
        name: "Test product 1",
        minCoverage: 10,
        maxCoverage: 90,
        risk: 0.3,
      },
      {
        id: 2,
        name: "Test product 2",
        minCoverage: 20,
        maxCoverage: 80,
        risk: 0.4,
      },
    ];

    const { container } = customRender(products);

    expect(container).toMatchSnapshot();
  });
});
