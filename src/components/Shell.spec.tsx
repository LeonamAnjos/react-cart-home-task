import { render } from "@testing-library/react";
import Shell from "./Shell";

describe("ElementCard", () => {
  it("WHEN rendered", () => {
    const { container } = render(
      <Shell toolbarContent={"Toolbar content test"}>{"Content test"}</Shell>
    );

    expect(container).toMatchSnapshot();
  });
});
