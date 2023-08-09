"use client";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import iconRound from "@images/icon-round.svg";
import { TypographyHTML } from "@/components";
import { UsersIcon } from "@/components/icons";

interface Props {
    items: any[];
}
const reasons = [
    { bgColor: "#FCF5E6" },
    { bgColor: "#FAFAFA" },
    { bgColor: "#FAFAFA" },
];
export default function Section3({ items }: Props) {
    const blocks = items.map((item, k) => ({
        ...item,
        bgColor: reasons?.[k]?.bgColor || "#fff",
    }));

    return (
        <Box>
            {blocks.map((item: any, idx: number) => (
                <Box
                    key={idx}
                    sx={{
                        bgcolor: item.bgColor,
                        textAlign: "center",

                        pt: { xs: 5, sm: 7.75 },
                        pb: { xs: 1.25, sm: 2.5 },
                    }}
                >
                    <Typography
                        fontSize={{ xs: 25, sm: 36 }}
                        fontWeight={600}
                        lineHeight={"normal"}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        fontSize={{ xs: 25, sm: 36 }}
                        fontWeight={600}
                        lineHeight={"normal"}
                    >
                        {item.desc}
                    </Typography>
                    <Image
                        src={require(`@images/${item.image}`)}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            margin: "auto",
                        }}
                    />
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
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
                            <TypographyHTML content={item.chat.user} />
                        </Box>
                        <Avatar>
                            <UsersIcon />
                        </Avatar>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
}
