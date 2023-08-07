import "@/assets/sharePage.css";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body id="__next">{children}</body>
        </html>
    );
}
