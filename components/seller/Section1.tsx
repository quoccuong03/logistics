"use client";

import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import { TypographyHTML } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "@/hooks/useLocale";
interface Props {
    data: any;
}
export default function Section1({ data }: Props) {
    const router = useRouter();
    const locale = useLocale();
    return (
        <Box
            sx={{
                mx: { xs: 2.5, sm: 3.125 },
                bgcolor: "#fff",
                pt: { xs: 4, sm: 9.375 },
                pl: { xs: 4, sm: 7.5 },
                pr: { xs: 2.5, sm: 5.75 },
                pb: { xs: 10, sm: 18.125 },
                "& .title": {
                    fontSize: { xs: 15, sm: 22 },
                    fontWeight: 700,
                    textAlign: "center",
                    textTransform: "uppercase",
                    span: {
                        color: "#71EAB0",
                    },
                },
                "& .desc": {
                    fontSize: { xs: 15, sm: 18 },
                    fontWeight: 500,
                },
            }}
        >
            <TypographyHTML content={data?.content?.title} className="title" />
            <Image
                src={require("@images/search.svg")}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    margin: "25px auto 52px auto",
                }}
            />
            <TypographyHTML content={data?.content?.desc} className="desc" />
            <List
                sx={{
                    mt: { xs: 2.5, sm: 5 },
                    mb: { xs: 2.5, sm: 3.125 },
                    "& .MuiListItem-root": {
                        px: 0,
                        "& .MuiListItemText-root": {
                            mt: 0,
                            pt: 0,
                            "& .MuiTypography-root": {
                                lineHeight: "normal",
                                fontSize: { xs: 15, sm: 18 },
                            },
                        },
                    },
                }}
            >
                {data?.content?.items?.map((item: any, idx: number) => (
                    <ListItem key={idx} alignItems="flex-start">
                        <Image
                            src={require("@images/check.svg")}
                            alt=""
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                marginTop: 6,
                                marginRight: 10,
                            }}
                        />
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            {/* <TypographyHTML
                content={`*${data?.content?.short_desc}`}
                color={"#1EB96F"}
                fontSize={16}
                fontWeight={300}
                sx={{
                    b: {
                        fontWeight: 700,
                    },
                }}
            /> */}
            <Button
                variant="contained"
                onClick={() => router.push(`/${locale}/seller/register`)}
                sx={{
                    width: { xs: 150, sm: 290 },
                    fontSize: { xs: 16, sm: 21 },
                    fontWeight: 500,
                    bgcolor: "#71EAB0 !important",
                    display: "flex",
                    mx: "auto",
                    borderRadius: 0,
                    boxShadow: "none",
                    mt: { xs: 2.5, sm: 5.625 },
                    color: "#000",
                }}
            >
                {data?.btn}
            </Button>
        </Box>
    );
}
