"use client";
import { getImageUrl } from "@/utils";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
interface Props {
    item: any;
    idx: number;
}
export default function CardItem({ item, idx }: Props) {
    const imgUrl = getImageUrl(item.image, "large");
    const [selected, setSelected] = useState<any>([]);
    const handleClick = (key: number) => {
        console.log("key", key);

        setSelected((prev: any) => [...prev, key]);
    };

    return (
        <Box
            className="relative keen-slider__slide"
            sx={{
                maxWidth: { xs: 222, sm: 315 },
                height: { xs: 250, sm: 395 },
                overflow: "hidden",
                borderRadius: "5px",
                "& .item-img": {
                    borderRadius: "5px",
                },
                "& .overlay": {
                    bgcolor: "#fff",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    "& .MuiButtonBase-root": {
                        bgcolor: "#FFA1A1",
                        boxShadow: "none",
                        color: "#000",
                        textTransform: "capitalize",
                        fontSize: { xs: 12, sm: 16 },
                        fontWeight: 500,
                        minWidth: { xs: 100, sm: 155 },
                        minHeight: { xs: 24, sm: 32 },
                        lineHeight: "normal",
                    },
                },
            }}
        >
            <Image
                src={imgUrl[0]}
                alt={item.refType}
                width={315}
                height={395}
                className="item-img"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}
            />
            <Stack
                className="overlay"
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    src={require("@images/logo-2.svg")}
                    alt="Showniq"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
                <Typography
                    fontSize={{ xs: 20, sm: 31 }}
                    fontWeight={500}
                    my={2.5}
                >
                    OODT {idx + 1}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => handleClick(idx + 1)}
                    endIcon={
                        <Image
                            src={require("@images/eye.svg")}
                            alt="Show"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    }
                >
                    Xem ngay
                </Button>
            </Stack>
        </Box>
    );
}
