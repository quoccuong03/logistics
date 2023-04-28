"use client";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { DownloadIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { HIDE_POPUP } from "@/config/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/recoil/hooks";
import ModalDownload from "../ModalDownload";

export default function Footer() {
    const [showPopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const { onOpenModal } = useModal();
    useEffect(() => {
        if (!showPopup) {
            const timer = setTimeout(() => {
                onOpenModal();
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, []);
    const pathname = usePathname();
    if (pathname === "/download") {
        return <></>;
    }
    return (
        <footer className="fixed left-0 right-0 bottom-5 px-[20px] md:px-[26px] z-50">
            <Button
                endIcon={<DownloadIcon />}
                className="text-base font-bold text-black flex justify-end mt-4 min-h-[48px] md:max-w-[594px] mx-auto"
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
            <ModalDownload />
        </footer>
    );
}
