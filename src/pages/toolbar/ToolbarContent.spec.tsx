import { render } from "@testing-library/react";
import ToolbarContent from "./ToolbarContent";

describe("<ToolbarContent />", () => {
  it("SHOULD render", () => {
    const { container } = render(<ToolbarContent />);

    expect(container).toMatchSnapshot();
  });
});
