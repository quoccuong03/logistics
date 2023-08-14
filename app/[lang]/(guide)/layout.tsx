import "@/assets/globals.css";
import "./index.scss";
import "aos/dist/aos.css";
export default function GuideLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body id="__next">
                <section className="bg-[#D4D4D7]">
                    <div
                        className={`max-w-[1613.96px] mx-auto  relative`}
                        id="layout"
                    >
                        <main className="min-h-screen">{children}</main>
                    </div>
                </section>
            </body>
        </html>
    );
}
