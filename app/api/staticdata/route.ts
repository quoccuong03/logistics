import { NextResponse } from "next/server";

import { Locale, i18n } from "@/config/i18n-config";
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang: Locale =
        (searchParams?.get("lang") as Locale) ?? i18n.defaultLocale;

    const res = await fetch(
        `${process.env.BASE_URL}/uploads/app/landingpage/language/${lang}.json`
    );
    if (!res.ok) {
        throw new Error("Không tìm thấy dữ liệu");
    }

    const langConfig = await res.json();

    return NextResponse.json(langConfig);
}
