import { render, fireEvent, screen } from "@testing-library/react";
import CoverageSlider, { CoverageSliderProps } from "./CoverageSlider";

describe("<CoverageSlider />", () => {
  const customRender = (props?: Partial<CoverageSliderProps>) => {
    return render(
      <CoverageSlider
        minCoverage={10}
        maxCoverage={90}
        initialCoverage={50}
        {...props}
      ></CoverageSlider>
    );
  };

  it("SHOULD render", () => {
    const { container } = customRender();

    expect(container).toMatchSnapshot();
  });

  it("SHOULD notify onCoverageChange event", async () => {
    const handleCoverageChange = jest.fn();

    const { container } = customRender({
      onCoverageChange: handleCoverageChange,
    });

    const element = screen.getByTestId("coverage-slider");
    await fireEvent.mouseDown(element, { clientX: 1 });

    expect(handleCoverageChange).toBeCalledTimes(1);
    expect(container).toMatchSnapshot();

    await fireEvent.mouseDown(element, { clientX: -1 });

    expect(handleCoverageChange).toBeCalledTimes(2);
    expect(container).toMatchSnapshot();
  });
});
