"use client";
import { FC } from "react";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import { CloseIcon, ArrowRightLongIcon } from "@/components/icons";
import Image from "next/image";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { HIDE_POPUP } from "@config/constants";

import { useRouter } from "next/navigation";
interface Props {
    isOpen: boolean;
    onClose: () => void;
    data: {
        img: any;
        url: string;
        id: string;
        buttonText: string;
    };
}

const ModalDownload: FC<Props> = ({ isOpen, onClose, data }) => {
    const [, setHidePopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const router = useRouter();
    const handleClosePopup = (hidden?: boolean) => {
        if (hidden) {
            setHidePopup(1);
            router.push("/download");
        }
        onClose();
    };

    return (
        <Drawer
            anchor={"bottom"}
            container={() => document?.getElementById("layout")}
            open={isOpen}
            onClose={() => handleClosePopup()}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: "#FBF5E8 !important",
                    boxShadow: "none !important",
                    maxWidth: 650,
                    mx: "auto",
                    borderRadius: "20px 20px 0 0",
                },
            }}
            id={data.id}
        >
            <Box
                sx={{
                    minHeight: 510,
                    position: "relative",
                    ml: 10,
                }}
                id={data.id}
            >
                <CloseIcon
                    style={{
                        position: "absolute",
                        zIndex: 100,
                        top: 15,
                        right: 15,
                        fontSize: 32,
                        // color: "white",
                    }}
                    onClick={() => handleClosePopup()}
                />
                <Box
                    sx={{
                        bgcolor: "#FFA1A1",
                        width: 160,
                        height: 82,
                        borderRadius: "0 0 11px 11px",
                        position: "relative",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pl: 2,
                    }}
                >
                    <Typography
                        fontSize={23}
                        lineHeight={"25px"}
                        fontWeight={300}
                    >
                        <strong className="font-bold uppercase">
                            AI stylist
                        </strong>
                        <br />
                        của bạn
                    </Typography>
                </Box>
                {/* <Link href={data.url} onClick={handleClosePopup} id={data.id}> */}
                <Stack
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                    direction={"row"}
                    className="relative"
                >
                    <Box>
                        <Image
                            src={require("@images/txt-g.svg")}
                            alt=""
                            className="max-w-[230px] h-auto mt-12 mb-5"
                        />
                        <Button
                            variant="contained"
                            onClick={() => handleClosePopup(true)}
                            sx={{
                                bgcolor: "#FFA1A1 !important",
                                fontSize: 10,
                                lineHeight: "12px",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                boxShadow: "none",
                                borderRadius: "28px",
                                my: 1.25,
                                color: "#000",
                            }}
                            endIcon={<ArrowRightLongIcon />}
                        >
                            Tải app ngay
                        </Button>
                        <Image
                            src={require("@images/txt-g2.svg")}
                            alt=""
                            className="max-w-[185px] h-auto"
                        />
                        <Image
                            src={require("@images/logo-txt.svg")}
                            alt=""
                            className="max-w-[68px] h-auto mt-10"
                        />
                    </Box>
                    <Image
                        id={data.id}
                        alt="Bottom arrow"
                        src={data.img}
                        className="max-w-[275px] mr-5 mt-[-60px]"
                        // fill
                        // style={{
                        //     objectPosition: "bottom",
                        //     objectFit: "contain",
                        // }}
                    />
                </Stack>
                {/* </Link> */}

                {/* <a
            target="_blank"
            href={data.url}
            rel="noreferrer"
            onClick={() => {
                closePopup();
            }}
        ></a> */}
            </Box>
        </Drawer>
    );
};

export default ModalDownload;
