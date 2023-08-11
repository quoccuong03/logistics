"use client";
import { i18n } from "@/config/i18n-config";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export const fetchLangs = async (query?: any): Promise<any> => {
    console.log("query", query);

    return await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata`,
        {
            params: query,
        }
    );
};

export const useTrans = () => {
    const pathName = usePathname();
    const segments = pathName?.split("/");
    const lang = process.env.NEXT_PUBLIC_BASE_PATH
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
