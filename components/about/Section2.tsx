"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
interface Props {
    title: string;
}
export default function Section2({ title }: Props) {
    return (
        <Box
            sx={{
                bgcolor: "#71EAB0",
                textAlign: "center",
                height: 290,
                pt: { xs: 5, sm: 7.75 },
                pb: { xs: 1.25, sm: 2.5 },
            }}
        >
            <Typography
                fontSize={{ xs: 25, sm: 36 }}
                fontWeight={600}
                lineHeight={"normal"}
            >
                {title}
            </Typography>
            <Image
                src={require("@images/chevrons-down.svg")}
                alt=""
                style={{
                    maxWidth: 122,
                    height: "auto",
                    margin: "auto",
                }}
            />
        </Box>
    );
}
