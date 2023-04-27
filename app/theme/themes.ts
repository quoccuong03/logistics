"use client";
import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin", "vietnamese"],
    variable: "--montserrat-font",
});
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
        },
    },
    typography: {
        fontFamily: montserrat.style.fontFamily,
    },
});
