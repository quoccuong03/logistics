"use client";

import CardList from "@/components/home/CardList";
import Carousel from "@/components/home/Carousel";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import VideoInfo from "@/components/home/VideoInfo";
import { InfoIcon } from "@/components/icons";
import { useFetchStyleList } from "@/hooks/useSuggestion";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import iconRound from "@images/icon-round.svg";
import { useTrans } from "@/hooks/useTrans";
import { useEffect, useState } from "react";
import Items from "@/components/suggest/items";
import { StyleList } from "@/components/style-list";
import FilterStyle from "@/components/filter-style";
export default function HomePage() {
    const [idx, setIdx] = useState<number>(0);
    const query = {
        status: "A",
        sortedBy: "desc",
        orderBy: "random",
        page: 1,
        limit: 30,
        "gender[]": "63e0ae94144f0000ff004b97",
        cache: "1_h",
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
                    minHeight: { xs: 500, sm: 685 },
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
                        height: 130,
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1.25}
                    >
                        <Typography fontSize={14}>
                            {format(new Date(), "dd/MM/yyyy")}
                        </Typography>
                        <InfoIcon
                            sx={{
                                fill: "none",
                                stroke: "#000",
                                fontSize: 18,
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
                                top: 0,
                                left: 0,
                                width: 1,
                                pr: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    py: 1.5,
                                    px: 1.75,
                                    bgcolor: "#FFDCDC",
                                    borderRadius: "7px",
                                    position: "relative",
                                    flex: 1,
                                    height: 57,
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        right: -6,
                                        bottom: -3,
                                        width: 30,
                                        height: 30,
                                        background: `url("${iconRound.src}") no-repeat bottom right`,
                                    },
                                }}
                            >
                                <Typography
                                    fontSize={12}
                                    dangerouslySetInnerHTML={{
                                        __html: trans?.common?.says?.[idx],
                                    }}
                                />
                            </Box>
                            <Image
                                src={require("@images/jesso2.gif")}
                                alt="Jesso"
                                style={{
                                    maxWidth: 115,
                                    height: "auto",
                                    flexGrow: 0,
                                }}
                            />
                        </Stack>
                    ) : null}
                </Box>

                {odtList ? <CardList items={odtList} /> : null}
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
        </Box>
    );
}
