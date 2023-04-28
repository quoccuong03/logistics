"use client";
import RecoilProvider from "@/app/providers/RecoilProvider";
import { lightTheme } from "@/app/theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
const montserrat = Montserrat({
    subsets: ["latin", "vietnamese"],
    variable: "--montserrat-font",
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <body id="__next" className={montserrat.className}>
                <QueryClientProvider client={queryClient}>
                    <RecoilProvider>{children}</RecoilProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </body>
        </ThemeProvider>
    );
}
