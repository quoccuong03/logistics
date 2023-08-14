"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import bgImg from "@images/bg-about.png";
import { TypographyHTML } from "@/components";
import Image from "next/image";
import { DownloadIcon, AwardIcon, UsersIcon } from "@/components/icons";

interface Props {
    title: string;
    desc: string;
    data: any;
}

export default function SectionOne({ title, desc, data }: Props) {
    const { download, user, award, labels } = data;
    const items = [
        {
            key: "download",
            icon: <DownloadIcon />,
            title: download?.title,
            desc: `100,000 ${download?.desc}`,
        },
        {
            key: "award",
            icon: <AwardIcon />,
            title: award?.title,
            desc: award?.desc,
        },
        {
            key: "users",
            icon: <UsersIcon />,
            title: user?.title,
            desc: "78%",
        },
    ];
    return (
        <Box
            sx={{
                position: "relative",
                background: `#F6F7F9 url("${bgImg.src}") no-repeat bottom center`,
                backgroundSize: { xs: "contain", sm: "650px 537px" },
                minHeight: { xs: 400, sm: 695 },
                pt: { xs: 2.5, sm: 9.375 },
                "& .title": {
                    fontSize: { xs: 10, sm: 20 },
                },
                "& .desc": {
                    fontSize: { xs: 10, sm: 20 },
                    fontWeight: 600,
                    textAlign: "center",
                },
                "& .box": {
                    "&-item": {
                        height: { xs: 130, sm: 205 },
                        position: "relative",
                        mt: { xs: 10, sm: 13.75 },
                        pl: { xs: 2.5, sm: 3.375 },
                        "&__btn": {
                            fontSize: { xs: 12, sm: 15 },
                            fontWeight: 500,
                            bgcolor: "#FCF5E6",
                            py: 0.625,
                            px: 1.875,
                            filter: "drop-shadow(0px 5.155755996704102px 9.02257251739502px rgba(0, 0, 0, 0.25))",
                            minHeight: "auto",
                            lineHeight: "normal",
                            "&:nth-of-type(2)": {
                                position: "absolute",
                                bottom: { xs: 20, sm: 10 },
                                left: { xs: 45, sm: 175 },
                            },
                            "&:nth-of-type(3)": {
                                position: "absolute",
                                right: { xs: 10, sm: 100 },
                                bottom: 30,
                            },
                        },
                    },
                    "&-bottom": {
                        mx: 2.5,
                        mt: { xs: 2.5, sm: 6.25 },
                        "&__item": {
                            bgcolor: "#fff",
                            borderRadius: { xs: "6px", sm: "16px" },
                            textAlign: "center",
                            py: { xs: 0.625, sm: 2.75 },
                            px: { xs: 0.625, sm: 2.25 },
                            flex: 1,
                        },
                        "& .MuiSvgIcon-root": {
                            fill: "#FFA1A1",
                            stroke: "#FFA1A1",
                            strokeWidth: 1,
                        },
                        "&__title": {
                            fontSize: { xs: 10, sm: 12 },
                            fontWeight: 300,
                            lineHeight: "normal",
                            my: 0.625,
                        },
                        "&__desc": {
                            fontSize: { xs: 10, sm: 14 },
                            fontWeight: 600,
                            color: "#FFA1A1",
                        },
                    },
                },
            }}
        >
            <TypographyHTML content={title} className="text-center title" />
            <Typography className="desc">{desc}</Typography>
            <Stack className="box-item" alignItems={"flex-start"}>
                <Image
                    src={require("@images/about-1.svg")}
                    alt="About"
                    fill
                    style={{
                        objectFit: "fill",
                        objectPosition: "bottom center",
                    }}
                />
                <Button className="box-item__btn">{labels.style}</Button>
                <Button className="box-item__btn">{labels.item}</Button>
                <Button className="box-item__btn">{labels.store}</Button>
            </Stack>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                className="box-bottom"
                spacing={{ xs: 1.25, sm: 4 }}
            >
                {items.map((item: any, idx: number) => (
                    <Box key={idx} className="box-bottom__item">
                        {item.icon}
                        <Typography className="box-bottom__title">
                            {item.title}
                        </Typography>
                        <Typography className="box-bottom__desc">
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
