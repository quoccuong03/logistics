"use client";
import { createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000",
        },
    },
    typography: {
        fontFamily: "var(--montserrat-font)",
    },
});
