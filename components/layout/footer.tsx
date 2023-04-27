"use client";
import { Button } from "@mui/material";
import React from "react";
import { DownloadIcon } from "@/components/icons";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    if (pathname === "/download") {
        return <></>;
    }
    return (
        <footer className="sticky bottom-5 pl-5 pr-5 bg-[#FDF5E7]">
            <Button
                endIcon={<DownloadIcon />}
                className="text-base font-bold text-black flex justify-end mt-4 min-h-[48px]"
                variant="contained"
                fullWidth
                href="/download"
                sx={{
                    textTransform: "initial !important",
                    background:
                        "linear-gradient(90deg, #71EAB0 4.3%, #71EAB0 26.74%, #FFC1C1 58.52%, #FFA1A1 94.04%) !important",
                    // "& .MuiButton-endIcon": {
                    //     mx: "auto",
                    // },
                }}
            >
                <span className="mx-auto">Xem hơn 40,000 phong cách</span>
            </Button>
        </footer>
    );
}
