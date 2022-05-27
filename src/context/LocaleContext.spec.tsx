import { render, screen, fireEvent } from "@testing-library/react";
import LocaleContext, { LocaleProvider } from "./LocaleContext";
import { LocaleType } from "./locale-config";
import { ReactNode, useContext } from "react";

const TestComponent = ({ locale }: { locale: LocaleType }) => {
  const { getLocale, setLocale } = useContext(LocaleContext);

  const handleClick = () => setLocale(locale);

  return (
    <>
      <p>{getLocale()}</p>
      <button data-testid="test-button" onClick={handleClick}>
        ChangeLocale
      </button>
    </>
  );
};

describe("LocaleContext", () => {
  const customRender = (initialLocale: LocaleType, children: ReactNode) => {
    return render(
      <LocaleProvider locale={initialLocale}>{children}</LocaleProvider>
    );
  };

  it("WHEN rendered", () => {
    const { container } = customRender(
      "de-DE",
      <TestComponent locale={"en-US"} />
    );

    expect(container).toMatchSnapshot();

    const element = screen.getByTestId("test-button");
    fireEvent.click(element);

    expect(container).toMatchSnapshot();
  });
});
