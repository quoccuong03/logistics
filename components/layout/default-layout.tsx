"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./navbar";
import Footer from "./footer";
import TopFooter from "./top-footer";
import ModalDownload from "../ModalDownload";
export default function DefaultLayout({
    children,
    linQr,
    lang,
}: {
    children: ReactNode;
    linQr: string;
    lang: any;
}) {
    const pathname = usePathname();
    const popupData = lang?.popup;
    return (
        <div
            className={`max-w-[650px] mx-auto border-2 relative ${
                pathname === "/" ? "bg-[#FDF5E7]" : ""
            }`}
            id="layout"
        >
            <Navbar lang={lang} />
            <main className="min-h-screen">
                {children}
                {/* {!pathname?.endsWith("about") ? (
                    <TopFooter lang={lang} />
                ) : null} */}
            </main>
            {/* <Backdrop open={true} sx={{ position: "absolute " }}>
                DEMO Backdrop
            </Backdrop> */}
            <Footer linQr={linQr} lang={lang} />
            <ModalDownload lang={popupData} />
        </div>
    );
}
