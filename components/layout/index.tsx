"use client";
import RecoilProvider from "@/app/providers/RecoilProvider";
import { lightTheme } from "@/app/theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import Analytics from "@/app/Analytics";
const montserrat = Montserrat({
    subsets: ["latin", "vietnamese"],
    variable: "--montserrat-font",
});

export default function Layout({
    children,
    linQr,
}: {
    children: ReactNode;
    linQr: string;
}) {
    const pathname = usePathname();
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <body id="__next" className={montserrat.className}>
                <Analytics />
                <QueryClientProvider client={queryClient}>
                    <RecoilProvider>
                        <div
                            className={`max-w-[650px] mx-auto border-2 relative ${
                                pathname === "/" ? "bg-[#FDF5E7]" : ""
                            }`}
                            id="layout"
                        >
                            <Navbar />
                            <main className="min-h-screen">{children}</main>
                            <Footer linQr={linQr} />
                        </div>
                    </RecoilProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </body>
        </ThemeProvider>
    );
}
