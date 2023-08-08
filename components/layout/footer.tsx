"use client";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { DownloadIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { HIDE_POPUP } from "@/config/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/recoil/hooks";
import ModalDownload from "../ModalDownload";

export default function Footer({ linQr, lang }: { linQr: string; lang: any }) {
    const [showPopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const { onOpenModal, setLinkQr } = useModal();
    const pathname = usePathname();
    useEffect(() => {
        setLinkQr(linQr);
        if (!showPopup && pathname === "/suggest") {
            const timer = setTimeout(() => {
                onOpenModal();
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    if (pathname === "/download") {
        return <></>;
    }
    return (
        <footer className="fixed left-0 right-0 bottom-5 px-[20px] md:px-[26px] z-[999]">
            <Button
                endIcon={
                    <div className="flex items-center text-[10px] font-medium md:text-sm md:font-normal">
                        {lang?.common?.download} <DownloadIcon />
                    </div>
                }
                className="text-xs md:text-base font-bold text-black flex justify-end mt-4 min-h-[38px] md:min-h-[48px] md:max-w-[594px] mx-auto"
                variant="contained"
                fullWidth
                // href="/download"
                onClick={onOpenModal}
                sx={{
                    textTransform: "initial !important",
                    background:
                        "linear-gradient(90deg, #71EAB0 4.3%, #71EAB0 26.74%, #FFC1C1 58.52%, #FFA1A1 94.04%) !important",
                    "& .MuiButton-endIcon": {
                        svg: {
                            ml: "5px",
                            fontSize: { xs: 19, sm: 22 },
                        },
                    },
                }}
            >
                <span className="mx-auto">
                    {lang?.common?.moreStyle?.replace("{number}", "40,000")}
                </span>
            </Button>
            <ModalDownload />
        </footer>
    );
}
