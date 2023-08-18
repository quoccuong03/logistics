import { ReactNode } from "react";
import Layout from "@/components/layout";
import "@/assets/globals.css";
import "@/assets/main.scss";
import "keen-slider/keen-slider.min.css";
import { getInfoDonwload } from "@/hooks/useInfo";
import { headers } from "next/headers";
import { Metadata } from "next";
import { getLangs } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";
import { BASE_PATH } from "@/config/constants";

export const metadata: Metadata = {
    title: {
        template: "%s | SHOWNIQ.AI",
        default: "SHOWNIQ - AI Stylist Của Bạn",
    },
    description: "Có SHOWNIQ - Thời trang thật dễ dàng",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: {
            template: "Phong cách %s | SHOWNIQ.AI",
            default: "SHOWNIQ - AI Stylist Của Bạn",
        },
        description: "Có SHOWNIQ - Thời trang thật dễ dàng",
        url: "https://showniq.ai/",
        siteName: "SHOWNIQ",
        images: [
            {
                url: "https://showniq.ai/images/og-image.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "vi-VN",
        type: "website",
    },
    verification: {
        other: {
            "facebook-domain-verification": "d06zgrvc6d7l93u2quk2bv4zbl6pc4",
        },
    },
};

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { lang: Locale };
}) {
    const dataJson = await getInfoDonwload();
    const { lang } = params;
    // @ts-ignore
    if (lang === "favicon.ico") return;
    const userAgent = headers().get("user-agent");
    let linQr = `${BASE_PATH}/${lang}/download`;
    if (dataJson?.qr_link && userAgent) {
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            linQr = dataJson?.appStore;
        } else if (/Android/.test(userAgent)) {
            linQr = dataJson?.googlePlay;
        }
    }

    const dictionary = await getLangs(lang);

    return (
        <html lang={params.lang}>
            <Layout linQr={linQr} lang={dictionary}>
                {children}
            </Layout>
        </html>
    );
}
