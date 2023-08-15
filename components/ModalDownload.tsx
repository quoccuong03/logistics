"use client";
import { Box, Button, Drawer, Stack } from "@mui/material";
import { CloseIcon, ArrowRightLongIcon } from "@/components/icons";
import Image from "next/image";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { HIDE_POPUP } from "@config/constants";

import { useModal, useQRCode } from "@/hooks";
import { FC } from "react";
import TypographyHTML from "./TypographyHTML";
interface Props {
    lang: any;
}

const data = {
    img: require("@images/download-app.png"),
    url: "/download",
    id: "banner-160323",
    buttonText: "Đặt trước ngay",
};

const ModalDownload: FC<Props> = ({ lang }) => {
    const [, setHidePopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const { open, onClose: onCloseM } = useModal();
    const { linkQR } = useQRCode();
    const handleClosePopup = (hidden?: boolean) => {
        if (hidden) {
            setHidePopup(1);
            window.open(linkQR);
        }
        onCloseM();
    };

    return (
        <Drawer
            anchor={"bottom"}
            container={() => document?.getElementById("layout")}
            open={open}
            onClose={() => handleClosePopup()}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: "#FBF5E8 !important",
                    boxShadow: "none !important",
                    maxWidth: { xs: 1, sm: 650 },
                    mx: "auto",
                    borderRadius: "20px 20px 0 0",
                },
            }}
            id={data.id}
        >
            <Box
                sx={{
                    minHeight: { xs: 330, sm: 510 },
                    position: "relative",
                    ml: { xs: 2, sm: 10 },
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
                <div onClick={() => handleClosePopup(true)}>
                    <Box
                        sx={{
                            bgcolor: "#FFA1A1",
                            width: { xs: 120, sm: 160 },
                            height: { xs: 60, sm: 82 },
                            borderRadius: "0 0 11px 11px",
                            position: "relative",
                            zIndex: 9999,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            pl: 2,
                            b: {
                                fontWeight: 700,
                            },
                        }}
                    >
                        <TypographyHTML
                            fontSize={{ xs: 17, sm: 23 }}
                            lineHeight={{ xs: "20px", sm: "25px" }}
                            fontWeight={300}
                            content={lang?.title}
                        />
                        {/* <strong className="font-bold uppercase">
                                AI stylist
                            </strong>
                            <br />
                            của bạn
                        </Typography> */}
                    </Box>
                    {/* <Link href={data.url} onClick={handleClosePopup} id={data.id}> */}
                    <Stack
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                        direction={"row"}
                        className="relative"
                    >
                        <Box>
                            <TypographyHTML
                                fontSize={{ xs: 11, sm: 20 }}
                                lineHeight={{ xs: "20px", sm: "35px" }}
                                fontWeight={500}
                                content={lang?.desc}
                                textTransform={"uppercase"}
                                mt={{ xs: 3, sm: 6 }}
                                mb={{ xs: 1, sm: 2.5 }}
                            />
                            {/* <Image
                                src={require("@images/txt-g.svg")}
                                alt=""
                                className="max-w-[100px] md:max-w-[230px] h-auto mt-6 md:mt-12 mb-2 md:mb-5"
                            /> */}
                            <Button
                                variant="contained"
                                // onClick={() => handleClosePopup(true)}
                                sx={{
                                    bgcolor: "#FFA1A1 !important",
                                    fontSize: 10,
                                    lineHeight: "12px",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    boxShadow: "none",
                                    borderRadius: "28px",
                                    my: 1.875,
                                    color: "#000",
                                }}
                                endIcon={<ArrowRightLongIcon />}
                            >
                                {lang?.btn}
                            </Button>
                            <TypographyHTML
                                fontSize={{ xs: 10, sm: 13 }}
                                lineHeight={{ xs: "12px", sm: "15px" }}
                                content={lang?.txt}
                                color={"#000"}
                                fontWeight={500}
                                letterSpacing={1}
                            />
                            {/* <Image
                                src={require("@images/txt-g2.svg")}
                                alt=""
                                className="max-w-[145px] md:max-w-[185px] h-auto"
                            /> */}
                            <Image
                                src={require("@images/logo-txt.svg")}
                                alt=""
                                className="max-w-[68px] h-auto mt-5 md:mt-10"
                            />
                        </Box>
                        <Image
                            id={data.id}
                            alt="Bottom arrow"
                            src={data.img}
                            className="max-w-[180px] md:max-w-[275px] mr-5 mt-[-45px] md:mt-[-60px]"
                            // fill
                            // style={{
                            //     objectPosition: "bottom",
                            //     objectFit: "contain",
                            // }}
                        />
                    </Stack>
                </div>
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
