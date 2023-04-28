import Layout from "@/components/layout";
import "./globals.css";
import "./main.scss";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata = {
    title: {
        template: "%s | Showniq",
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
                url: "https://showniq.ai/og-image.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "vi-VN",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Layout>{children}</Layout>
        </html>
    );
}
