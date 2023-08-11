"use client";
import { i18n } from "@/config/i18n-config";
import { usePathname } from "next/navigation";

export const useLocale = () => {
    const pathname = usePathname();
    if (!pathname) return i18n.defaultLocale;
    const segments = pathname.split("/");
    let currentLang = segments?.[1];
    if (process.env.NEXT_PUBLIC_BASE_PATH) currentLang = segments?.[2];
    return currentLang || i18n.defaultLocale;
};
