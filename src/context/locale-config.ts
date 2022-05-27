export type LocaleType = "de-DE" | "en-US";

type LocaleConfig = {
  currency: string;
};

export const localeMap: Record<LocaleType, LocaleConfig> = {
  "de-DE": { currency: "EUR" },
  "en-US": { currency: "USD" },
};
