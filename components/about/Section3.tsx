"use client";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import iconRound from "@images/icon-round.svg";
import iconRoundGreen from "@images/tail-green.svg";
import { TypographyHTML } from "@/components";
import { StoreIcon, UserIcon } from "@/components/icons";

interface Props {
    items: any[];
}
const reasons = [
    { bgColor: "#FCF5E6" },
    { bgColor: "#FAFAFA" },
    { bgColor: "#fff" },
];
export default function Section3({ items }: Props) {
    const blocks = items.map((item, k) => ({
        ...item,
        bgColor: reasons?.[k]?.bgColor || "#fff",
    }));

    return (
        <Box
            sx={{
                "& .box-chat": {
                    mb: { xs: 2.5, sm: 4 },
                    mx: { xs: 2.5, sm: 3.375 },
                    "&__avatar": {
                        width: { xs: 45, sm: 72 },
                        height: { xs: 45, sm: 72 },
                        "& .MuiSvgIcon-root": {
                            fontSize: { xs: 32, sm: 42 },
                            fill: "#000",
                        },
                        "&.bg-green": {
                            bgcolor: "#71EAB0",
                        },
                        "&.bg-pink": {
                            bgcolor: "#F69FA1",
                        },
                    },
                    "&__inner": {
                        py: 1.5,
                        px: 1.75,
                        borderRadius: "7px",
                        position: "relative",
                        flex: 1,
                        minHeight: 80,
                        "& .MuiTypography-root": {
                            fontSize: { xs: 15, sm: 18 },
                            textAlign: "left",
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            right: -6,
                            bottom: -3,
                            width: 30,
                            height: 30,
                            background: `url("${iconRound.src}") no-repeat bottom right`,
                        },
                        "&.bg-pink": {
                            bgcolor: "#FFDCDC",
                        },
                        "&.bg-green": {
                            bgcolor: "#A0FFD2",
                            "&::after": {
                                backgroundImage: `url("${iconRoundGreen.src}")`,
                            },
                        },
                    },
                },
            }}
        >
            {blocks.map((item: any, idx: number) => (
                <Box
                    key={idx}
                    sx={{
                        bgcolor: item.bgColor,
                        textAlign: "center",
                        pt: { xs: 5, sm: 7.75 },
                        pb: { xs: 1.25, sm: 2.5 },
                        px: { xs: 2.5, sm: 4 },
                    }}
                >
                    <Typography
                        fontSize={{ xs: 20, sm: 25 }}
                        fontWeight={400}
                        lineHeight={"normal"}
                        textTransform={"uppercase"}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        fontSize={{ xs: 20, sm: 25 }}
                        fontWeight={600}
                        lineHeight={"normal"}
                        textTransform={"uppercase"}
                    >
                        {item.desc}
                    </Typography>
                    <Image
                        src={require(`@images/${item.image}`)}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            margin: "35px auto 65px auto",
                        }}
                    />
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        className="box-chat"
                        spacing={1.25}
                    >
                        <Box className="box-chat__inner bg-green">
                            <TypographyHTML content={item.chat.user} />
                        </Box>
                        <Avatar className="box-chat__avatar bg-green">
                            <UserIcon />
                        </Avatar>
                    </Stack>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        className="box-chat"
                        spacing={1.25}
                    >
                        <Box className="box-chat__inner bg-pink">
                            <TypographyHTML content={item.chat.store} />
                        </Box>
                        <Avatar className="box-chat__avatar bg-pink">
                            <StoreIcon />
                        </Avatar>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
}
