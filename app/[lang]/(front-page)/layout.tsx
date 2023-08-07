import Layout from "@/components/layout";
import "@/assets/globals.css";
import "@/assets/main.scss";

import { getInfoDonwload } from "@/hooks/useInfo";
import { headers } from "next/headers";
import { Metadata } from "next";
import { getDictionary } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";

export const metadata: Metadata = {
    title: {
        template: "%s | SHOWNIQ.AI",
        default: "SHOWNIQ - AI Stylist Của Bạn",
    },
    description: "Có SHOWNIQ - Thời trang thật dễ dàng",
    icons: {
        icon: "/favicon.png",
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
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dataJson = await getInfoDonwload();

    const userAgent = headers().get("user-agent");
    let linQr = "/download";
    if (dataJson?.qr_link && userAgent) {
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            linQr = dataJson?.appStore;
        } else if (/Android/.test(userAgent)) {
            linQr = dataJson?.googlePlay;
        }
    }
    const { lang } = params;
    const dictionary = await getDictionary(lang);
    console.log("dictionary", dictionary);

    return (
        <html lang={params.lang}>
            <Layout linQr={linQr}>{children}</Layout>
        </html>
    );
}
