import { render } from "@testing-library/react";
import LocaleContext, { LocaleProvider } from "./LocaleContext";
import { LocaleType } from "./locale-config";
import { ReactNode } from "react";

const customRender = (children: ReactNode, locale: LocaleType) => {
  return render(<LocaleProvider locale={locale}>{children}</LocaleProvider>);
};

describe("LocaleContext", () => {
  it("WHEN rendered", () => {
    const { container } = customRender("", "de-DE");

    expect(container).toMatchSnapshot();
  });
});
