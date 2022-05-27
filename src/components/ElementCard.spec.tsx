import { render } from "@testing-library/react";
import ElementCard from "./ElementCard";

describe("ElementCard", () => {
  it("WHEN rendered", () => {
    const { container } = render(
      <ElementCard
        title={"Title test"}
        avatar={"Avatar test"}
        subTitle={"SubTitle test"}
        actions={"Actions test"}
      >
        {"Content test"}
      </ElementCard>
    );

    expect(container).toMatchSnapshot();
  });
});
