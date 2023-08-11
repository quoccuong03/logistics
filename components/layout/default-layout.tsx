"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Backdrop } from "@mui/material";

import Navbar from "./navbar";
import Footer from "./footer";
import TopFooter from "./top-footer";
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
    console.log("NEXT_PUBLIC_BASE_PATH", process.env.NEXT_PUBLIC_BASE_PATH);
    console.log("NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);
    console.log("NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);
    console.log(
        "NEXT_PUBLIC_BASE_API_SERVER",
        process.env.NEXT_PUBLIC_BASE_API_SERVER
    );
    console.log(
        "NEXT_PUBLIC_STATIC_API_SERVER",
        process.env.NEXT_PUBLIC_STATIC_API_SERVER
    );

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
        </div>
    );
}
