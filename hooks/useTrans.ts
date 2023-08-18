"use client";
import { BASE_PATH, BASE_PATH_STATIC_LANDING_PAGE } from "@/config/constants";
import { i18n } from "@/config/i18n-config";
// import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export const fetchLangs = async (query?: any): Promise<any> => {
    const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata?lang=${locale}`,
        `${BASE_PATH_STATIC_LANDING_PAGE}/language/${query.lang}.json`,
        {
            cache: "no-cache",
        }
    );
    if (!res.ok) {
        throw new Error("Không tìm thấy dữ liệu");
    }
    const data = await res.json();
    const result = { ...data, locale: query.lang };

    return result;
    // return await axiosClient.get(
    //     // `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata`,
    //     `${BASE_PATH_STATIC_LANDING_PAGE}/language/${query.lang}.json`
    // );
};

export const useTrans = () => {
    const pathName = usePathname();
    const segments = pathName?.split("/");
    const lang = BASE_PATH
        ? segments?.[2] ?? i18n.defaultLocale
        : segments?.[1] ?? i18n.defaultLocale;

    const { data } = useQuery(
        ["getLocale", lang],
        async () => {
            return await fetchLangs({ lang });
        },
        { keepPreviousData: true, enabled: !!lang }
    );
    return data;
};
