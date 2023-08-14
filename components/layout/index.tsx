"use client";
import RecoilProvider from "@/app/providers/RecoilProvider";
import { lightTheme } from "@/app/theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import DefaultLayout from "./default-layout";

import { usePathname } from "next/navigation";
import Analytics from "@/app/Analytics";

import { useSelectedLayoutSegment } from "next/navigation";
import StoreProvider from "@/app/providers/StoreProvider";
const listSkipRootLayout = ["style-guide"];
const montserrat = Montserrat({
    subsets: ["latin", "vietnamese"],
    variable: "--montserrat-font",
});

export default function Layout({
    children,
    linQr,
    lang,
}: {
    children: ReactNode;
    linQr: string;
    lang: any;
}) {
    const segment = useSelectedLayoutSegment();

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <body id="__next" className={montserrat.className}>
                <Analytics />
                <QueryClientProvider client={queryClient}>
                    <StoreProvider>
                        <DefaultLayout linQr={linQr} lang={lang}>
                            {children}
                        </DefaultLayout>
                    </StoreProvider>
                    {/* <RecoilProvider>
                        {listSkipRootLayout.indexOf(segment || "") !== -1 ? (
                            children
                        ) : (
                            <DefaultLayout linQr={linQr} lang={lang}>
                                {children}
                            </DefaultLayout>
                        )}
                    </RecoilProvider> */}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </body>
        </ThemeProvider>
    );
}
