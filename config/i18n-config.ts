export const i18n = {
    defaultLocale: "vi",
    locales: ["en", "vi", "kr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
