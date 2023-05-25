import Layout from "@/components/layout";
import "./globals.css";
import "./main.scss";
import { getInfoDonwload } from "@/hooks/useInfo";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | SHOWNIQ",
        default: "SHOWNIQ - AI Stylist Của Bạn",
    },
    description: "Có SHOWNIQ - Thời trang thật dễ dàng",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "SHOWNIQ - AI Stylist Của Bạn",
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
}: {
    children: React.ReactNode;
}) {
    const dataJson = await getInfoDonwload();

    const userAgent = headers().get("user-agent");
    let linQr = "/download";
    if (dataJson?.qr_link && userAgent) {
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            linQr = dataJson?.qr_link;
        } else if (/Android/.test(userAgent)) {
            linQr = dataJson?.qr_link;
        }
    }

    return (
        <html lang="en">
            <Layout linQr={linQr}>{children}</Layout>
        </html>
    );
}
