import { render } from "@testing-library/react";
import { LocaleProvider } from "../../context/LocaleContext";
import CoveragePriceCaption, {
  CoveragePriceCaptionProps,
} from "./CoveragePriceCaption";

describe("<CoveragePriceCaption />", () => {
  const customRender = (props?: Partial<CoveragePriceCaptionProps>) => {
    return render(
      <LocaleProvider locale="en-US">
        <CoveragePriceCaption
          coverage={123.45}
          price={12.34}
          {...props}
        ></CoveragePriceCaption>
      </LocaleProvider>
    );
  };
  it("SHOULD render", () => {
    const { container } = customRender();

    expect(container).toMatchSnapshot();
  });
});
