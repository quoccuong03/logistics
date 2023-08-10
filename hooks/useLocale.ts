"use client";
import { i18n } from "@/config/i18n-config";
import { usePathname } from "next/navigation";

export const useLocale = () => {
    const pathname = usePathname();
    if (!pathname) return i18n.defaultLocale;
    const segments = pathname.split("/");
    return segments?.[1] || i18n.defaultLocale;
};
