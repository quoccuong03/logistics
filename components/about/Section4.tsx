"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TypographyHTML } from "@/components";
interface Props {
    item: any;
}
export default function Section4({ item }: Props) {
    return (
        <Box
            sx={{
                bgcolor: "#FCF5E6",
                textAlign: "center",
                pt: { xs: 5, sm: 7.75 },
                pb: { xs: 1.25, sm: 2.5 },
                px: { xs: 1.25, sm: 6.25 },
                "& .MuiTypography-root": {
                    fontSize: { xs: 20, sm: 25 },
                    fontWeight: 600,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    b: {
                        color: "#2DBBA6",
                        fontWeight: 800,
                    },
                },
                "& .box-chart": {
                    mt: { xs: 2.5, sm: 6.25 },
                    mb: { xs: 10, sm: 10.625 },
                    "&__item": {
                        textAlign: "center",
                        "&--title": {
                            fontSize: 8,
                            fontWeight: 500,
                        },
                        "&--num": {
                            fontSize: { xs: 20, sm: 30 },
                            fontWeight: 600,
                        },
                        "&--desc": {
                            fontSize: 8,
                            fontWeight: 500,
                            minHeight: 25,
                        },
                    },
                },
            }}
        >
            <TypographyHTML content={item.title} />
            <Image
                src={require(`@images/${item.img}`)}
                alt=""
                className="mx-auto mt-8 md:mt-14 max-w-full h-auto"
            />
            <Stack
                className="box-chart"
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={{ xs: 0.625, sm: 2.5 }}
                divider={
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: 52,
                            bgcolor: "#D9D9D9",
                        }}
                    />
                }
            >
                <Box className="box-chart__item">
                    <Typography className="box-chart__item--title">
                        {item.download.title}
                    </Typography>
                    <Typography className="box-chart__item--num">
                        100,000+
                    </Typography>
                    <Typography className="box-chart__item--desc">
                        {item.download.desc}
                    </Typography>
                </Box>
                <Box className="box-chart__item">
                    <TypographyHTML
                        className="box-chart__item--title"
                        content={item.user.title}
                    />
                    <Typography className="box-chart__item--num">
                        77,000+
                    </Typography>
                    <TypographyHTML
                        content={item.user.desc}
                        className="box-chart__item--desc"
                    />
                </Box>
                <Box className="box-chart__item">
                    <TypographyHTML
                        content={item.award.title}
                        className="box-chart__item--title"
                    />
                    <Typography className="box-chart__item--num">
                        {item.award.name}
                    </Typography>
                    <TypographyHTML
                        content={item.award.desc}
                        className="box-chart__item--desc"
                    />
                </Box>
            </Stack>
        </Box>
    );
}
