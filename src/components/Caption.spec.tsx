import { render } from "@testing-library/react";
import Caption from "./Caption";

describe("Caption", () => {
  it("WHEN have text content", () => {
    const { container } = render(<Caption>{"Test"}</Caption>);

    expect(container).toMatchSnapshot();
  });
});
