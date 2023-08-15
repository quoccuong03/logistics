"use client";
import { getCookie, setCookie } from "cookies-next";
import CardList from "@/components/home/CardList";
import VideoInfo from "@/components/home/VideoInfo";
import { InfoIcon } from "@/components/icons";
import { useFetchStyleList } from "@/hooks/useSuggestion";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import iconRound from "@images/icon-round.svg";
import { useTrans } from "@/hooks/useTrans";
import { useEffect, useState } from "react";
import { StyleList } from "@/components/style-list";
import FilterStyle from "@/components/filter-style";
import TopFooter from "@/components/layout/top-footer";
import { TypographyHTML } from "@/components";
import ModalTips from "@/components/ModalTips";
import { HIDE_POPUP_TIP } from "@/config/constants";

export default function HomePage() {
    const [idx, setIdx] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const hiddenTipPopup = getCookie(HIDE_POPUP_TIP);
    const query = {
        status: "A",
        sortedBy: "desc",
        orderBy: "random",
        page: 1,
        limit: 30,
        "gender[]": "63e0ae94144f0000ff004b97",
        cache: "1_h",
        getStoreDetail: true,
    };
    const queryKey = ["listStyle", query];
    const { data } = useFetchStyleList(queryKey, queryKey[1]);
    // @ts-ignore
    const listData = data?.listData || [];
    const odtList = listData.length ? listData.slice(0, 10) : undefined;
    const styleList = listData.length ? listData.slice(10) : undefined;
    const trans = useTrans();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (idx < trans?.common?.says?.length - 1) {
                setIdx((current) => current + 1);
            } else {
                setIdx(0);
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [trans, idx]);

    useEffect(() => {
        if (!hiddenTipPopup) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setCookie(HIDE_POPUP_TIP, "1", { maxAge: 60 * 60 * 24 });
        setOpen(false);
    };

    return (
        <Box
            sx={{
                "& .style-list": {
                    "&__title": {
                        px: 2.5,
                        textTransform: "uppercase",
                        fontSize: 12,
                    },
                },
                "& .filter": {
                    pl: 2.5,
                },
            }}
        >
            <VideoInfo />
            <Box
                className="relative"
                sx={{
                    minHeight: { xs: 435, sm: 685 },
                    background:
                        "linear-gradient(360deg, #FFA1A1 0%, #F1F4E2 81.25%, #FCF5E6 99.44%)",
                    pt: { xs: 4, sm: 10 },
                    pl: { xs: 2.5, sm: 6.25 },
                    mb: { xs: 2.5, sm: 7.25 },
                }}
            >
                <Box
                    className="relative"
                    sx={{
                        height: { xs: 100, sm: 130 },
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={{ xs: 0.625, sm: 1.25 }}
                    >
                        <Typography fontSize={{ xs: 12, sm: 14 }}>
                            {format(new Date(), "dd/MM/yyyy")}
                        </Typography>
                        <InfoIcon
                            sx={{
                                fill: "none",
                                stroke: "#000",
                                fontSize: { xs: 14, sm: 18 },
                            }}
                        />
                    </Stack>
                    {trans ? (
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            sx={{
                                position: "absolute",
                                top: { xs: 10, sm: 0 },
                                left: 0,
                                width: 1,
                                pr: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    py: { xs: 0.625, sm: 1.5 },
                                    px: { xs: 0.625, sm: 1.75 },
                                    bgcolor: "#FFDCDC",
                                    borderRadius: "7px",
                                    position: "relative",
                                    flex: 1,
                                    height: { xs: "auto", sm: 57 },
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        right: -6,
                                        bottom: -3,
                                        width: 30,
                                        height: 30,
                                        background: `url("${iconRound.src}") no-repeat bottom right`,
                                    },
                                    "& .MuiTypography-root": {
                                        br: {
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                        },
                                    },
                                }}
                            >
                                <TypographyHTML
                                    fontSize={{ xs: 10, sm: 12 }}
                                    content={trans?.common?.says?.[idx]}
                                />
                            </Box>
                            <Image
                                src={require("@images/jesso2.gif")}
                                alt="Jesso"
                                className="max-w-[80px] md:max-w-[115px] h-auto"
                                style={{
                                    // maxWidth: 115,
                                    // height: "auto",
                                    flexGrow: 0,
                                }}
                            />
                        </Stack>
                    ) : null}
                </Box>

                {odtList ? (
                    <CardList items={odtList} lang={trans?.common} />
                ) : null}
            </Box>
            {trans ? (
                <FilterStyle
                    items={trans?.style?.filters}
                    title={trans?.style?.block?.filter}
                />
            ) : null}
            <StyleList
                items={styleList || []}
                title={trans?.style?.block?.title}
            />
            <TopFooter lang={trans} />
            <ModalTips open={open} onClose={handleClose} />
        </Box>
    );
}
