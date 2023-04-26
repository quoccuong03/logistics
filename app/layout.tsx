import Layout from "@/components/layout";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

export const metadata = {
    title: {
        template: "%s | Showniq",
        default: "Home",
    },
    description: "App Showniq",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Layout>
                <div className="max-w-[650px] mx-auto border-2 relative">
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                </div>
            </Layout>
        </html>
    );
}
