import React, { createContext, ReactNode, useMemo, useState } from "react";
import { localeMap, LocaleType } from "./locale-config";

type LocaleState = {
  getLocale: () => LocaleType | undefined;
  setLocale: (locale: LocaleType) => void;
  currencyFormat: (num: number) => string;
};

const LocaleContext = createContext<LocaleState>({
  getLocale: (): LocaleType | undefined => undefined,
  setLocale: (locale: LocaleType): void => {
    /* EMPTY */
  },
  currencyFormat: (num: number): string => "",
});

export interface LocaleProviderProps {
  children?: ReactNode;
  locale: LocaleType;
}

export const LocaleProvider = ({ children, locale }: LocaleProviderProps) => {
  const [value, setValue] = useState(locale);

  const contextValue = useMemo(() => {
    const formatter = new Intl.NumberFormat(value, {
      style: "currency",
      currency: localeMap[value]?.currency,
      minimumFractionDigits: 2,
    });

    return {
      getLocale: () => value,
      setLocale: (locale: LocaleType) => setValue(locale),
      currencyFormat: (num: number): string => formatter.format(num),
    };
  }, [value, setValue]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
