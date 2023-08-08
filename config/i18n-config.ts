export const i18n = {
    defaultLocale: "vi",
    locales: ["vi", "en", "kr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
