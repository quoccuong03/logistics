"use client";
import { Box, Button, Typography } from "@mui/material";
import { TypographyHTML } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "@/hooks/useLocale";
import { useModal } from "@/hooks";
interface Props {
    data: any;
    common: any;
}
export default function Section1({ data, common }: Props) {
    const router = useRouter();
    const { onShow } = useModal();
    const locale = useLocale();
    return (
        <Box
            sx={{
                mx: { xs: 2.5, sm: 3.125 },
                bgcolor: "#fff",
                pt: { xs: 4, sm: 9.375 },
                pl: { xs: 4, sm: 7.5 },
                pr: { xs: 2.5, sm: 5.75 },
                pb: { xs: 5, sm: 8 },
                "& .title": {
                    fontSize: { xs: 15, sm: 22 },
                    fontWeight: 700,
                    textAlign: "center",
                    textTransform: "uppercase",
                    span: {
                        color: "#71EAB0",
                        display: "block",
                    },
                },
                "& .desc": {
                    fontSize: { xs: 12, sm: 18 },
                    fontWeight: 500,
                    lineHeight: 1.7,
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

            <TypographyHTML
                content={data?.content?.dear}
                fontSize={{ xs: 12, sm: 16 }}
                fontWeight={300}
                textAlign={"right"}
                mt={1.25}
            />
            <Typography
                fontSize={{ xs: 12, sm: 16 }}
                fontWeight={300}
                textAlign={"right"}
            >
                SHOWNIQ
            </Typography>
            <Button
                variant="contained"
                onClick={onShow}
                // onClick={() => router.push(`/${locale}`)}
                sx={{
                    width: { xs: 200, sm: 290 },
                    fontSize: { xs: 12, sm: 21 },
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
                {common?.download}
            </Button>
        </Box>
    );
}
