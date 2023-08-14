"use client";
import {
    Box,
    Button,
    Drawer,
    Stack,
    Backdrop,
    Dialog,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { CloseIcon, ArrowRightLongIcon } from "@/components/icons";
import Image from "next/image";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { HIDE_POPUP } from "@config/constants";

import { useRouter } from "next/navigation";
import { useModal, useQRCode } from "@/hooks";
import { FC } from "react";
import TypographyHTML from "./TypographyHTML";
import { useLocale } from "@/hooks/useLocale";
interface Props {
    lang?: any;
    open: boolean;
    onClose: () => void;
    // data: {
    // 	img: any;
    // 	url: string;
    // 	id: string;
    // 	buttonText: string;
    // };
}

const ModalTips: FC<Props> = ({ lang, open, onClose }) => {
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
                src={require("@images/tip-vi.png")}
                className="max-w-full h-auto"
                alt="Tips"
            />
        </Dialog>
    );
};

export default ModalTips;
