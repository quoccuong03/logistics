"use client";
import { Dialog, IconButton } from "@mui/material";
import { CloseIcon } from "@/components/icons";
import Image from "next/image";

import { FC } from "react";
import { useLocale } from "@/hooks/useLocale";
interface Props {
    open: boolean;
    onClose: () => void;
    // data: {
    // 	img: any;
    // 	url: string;
    // 	id: string;
    // 	buttonText: string;
    // };
}

const ModalTips: FC<Props> = ({ open, onClose }) => {
    const locale = useLocale();
    return (
        <Dialog
            onClose={onClose}
            open={open}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: "transparent !important",
                    boxShadow: "none !important",
                    borderRadius: 0,
                    "& .MuiButtonBase-root": {
                        ml: "auto",
                        p: 0,
                        "& .MuiSvgIcon-root": {
                            fontSize: { xs: 20, sm: 40 },
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 5,
                        },
                    },
                },
            }}
        >
            <IconButton onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <Image
                src={require(`@images/tip-${locale}.png`)}
                className="max-w-full h-auto"
                alt="Tips"
            />
        </Dialog>
    );
};

export default ModalTips;
