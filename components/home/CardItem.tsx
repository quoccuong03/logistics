"use client";
import { getImageUrl } from "@/utils";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { memo } from "react";
import { DisLikeIcon, LikeIcon } from "@/components/icons";
interface Props {
    item: any;
    idx: number;
    onShow: (k: number) => void;
    itemsSelected: any[];
    lang: any;
}

const CardItem = ({ item, idx, onShow, itemsSelected, lang }: Props) => {
    const imgUrl = getImageUrl(item.image, "large");
    return (
        <Box
            className="relative keen-slider__slide"
            sx={{
                // maxWidth: { xs: 222, sm: 315 },
                height: { xs: 220, sm: 395 },
                overflow: "hidden",
                borderRadius: "5px",
                "& .item-img": {
                    borderRadius: "5px",
                },
                "& .overlay": {
                    bgcolor: "rgba(255,255,255,0.96)",
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
                // width={315}
                // height={395}
                fill
                className="item-img"
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "5px",
                    // maxWidth: "100%",
                    // height: "auto",
                }}
            />
            {!itemsSelected.includes(idx) ? (
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
                        STYLE {idx + 1}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => onShow(idx)}
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
                        {lang?.show}
                    </Button>
                </Stack>
            ) : (
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 20,
                        right: 30,
                        zIndex: 1,
                    }}
                >
                    {item?.store ? (
                        <Avatar
                            src={item?.store?.avatar?.thumb?.url}
                            alt={item?.store?.name}
                            sx={{
                                width: 26,
                                height: 26,
                            }}
                        />
                    ) : null}
                    <Box
                        sx={{
                            ml: "auto",
                            "& .MuiButtonBase-root": {
                                "& .MuiSvgIcon-root": {
                                    fontSize: { xs: 20, sm: 24 },
                                    fill: "#fff",
                                },
                            },
                        }}
                    >
                        <IconButton disableRipple onClick={() => onShow(11)}>
                            <LikeIcon />
                        </IconButton>
                        <IconButton disableRipple onClick={() => onShow(11)}>
                            <DisLikeIcon />
                        </IconButton>
                    </Box>
                </Stack>
            )}
        </Box>
    );
};
export default memo(CardItem);
