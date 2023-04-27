import { FC } from "react";
import {
    Box,
    Button,
    Drawer,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { CloseIcon, ArrowRightLongIcon } from "@/components/icons";
import Image from "next/image";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { HIDE_POPUP } from "@config/constants";
import Link from "next/link";
interface Props {
    isOpen: boolean;
    onClose: () => void;
    data: {
        img: any;
        url: string;
        id: string;
        buttonText: string;
    };
}

const ModalDownload: FC<Props> = ({ isOpen, onClose, data }) => {
    const [, setHidePopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const handleClosePopup = () => {
        setHidePopup(1);
        onClose();
    };

    return (
        <Drawer
            anchor={"bottom"}
            open={isOpen}
            onClose={handleClosePopup}
            sx={{
                ".MuiPaper-root": {
                    backgroundColor: "#FBF5E8 !important",
                    boxShadow: "none !important",
                    maxWidth: 650,
                    mx: "auto",
                },
                // position: "relative",
                "& .MuiTypography-root": {
                    fontFamily: "SF Pro",
                },
            }}
            id={data.id}
        >
            <Image
                id={data.id}
                alt="Bottom arrow"
                src={data.img}
                fill
                style={{
                    objectPosition: "bottom",
                    objectFit: "contain",
                }}
            />
            <Box
                sx={{
                    minHeight: 410,
                    position: "relative",
                    ml: 4,
                }}
                id={data.id}
            >
                <CloseIcon
                    style={{
                        position: "absolute",
                        zIndex: 100,
                        top: 15,
                        right: 15,
                        fontSize: 32,
                        // color: "white",
                    }}
                    onClick={handleClosePopup}
                />
                <Box
                    sx={{
                        bgcolor: "#1884ED",
                        width: 77,
                        height: 55,
                        borderRadius: "0 0 11px 11px",
                        position: "relative",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        fontSize={18}
                        lineHeight={"20px"}
                        fontWeight={600}
                        fontFamily={"SF Pro"}
                        color={"#FFF"}
                        textTransform={"uppercase"}
                    >
                        Giảm <br />
                        40%
                    </Typography>
                </Box>
                <Link href={data.url} onClick={handleClosePopup} id={data.id}>
                    <Stack
                        justifyContent={"center"}
                        height={245}
                        alignItems={"flex-start"}
                    >
                        <Typography
                            fontSize={18}
                            lineHeight={"18px"}
                            fontWeight={700}
                            textTransform={"uppercase"}
                        >
                            Áo khoác <span className="blue">chống nắng</span>
                        </Typography>
                        <Typography
                            fontSize={18}
                            fontWeight={700}
                            textTransform={"uppercase"}
                        >
                            đã có <span className="blue">màu bạn thích!</span>
                        </Typography>
                        <Box
                            sx={{
                                mt: 1.25,
                                span: {
                                    display: "inline-flex",
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    mr: 1.25,
                                    "&:nth-of-type(1)": { bgcolor: "#FF8578" },
                                    "&:nth-of-type(2)": { bgcolor: "#FA7799" },
                                    "&:nth-of-type(3)": { bgcolor: "#BFB7FC" },
                                    "&:nth-of-type(4)": { bgcolor: "#99C2FF" },
                                    "&:nth-of-type(5)": { bgcolor: "#0E1645" },
                                    "&:nth-of-type(6)": { bgcolor: "#A19D9E" },
                                    "&:nth-of-type(7)": { bgcolor: "#E7E2D5" },
                                },
                            }}
                        >
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#1884ED",
                                fontSize: 10,
                                lineHeight: "12px",
                                color: "#fff",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                boxShadow: "none",
                                borderRadius: "28px",
                                my: "17px",
                            }}
                            endIcon={<ArrowRightLongIcon />}
                        >
                            Đặt trước ngay
                        </Button>
                        <Typography
                            fontSize={14}
                            lineHeight={"16px"}
                            fontWeight={600}
                            textTransform={"uppercase"}
                        >
                            Chỉ từ
                        </Typography>
                        <Typography
                            fontSize={51}
                            lineHeight={"61px"}
                            fontWeight={600}
                            textTransform={"uppercase"}
                            color={"#1884ED"}
                        >
                            389K
                        </Typography>
                    </Stack>
                </Link>

                {/* <a
            target="_blank"
            href={data.url}
            rel="noreferrer"
            onClick={() => {
                closePopup();
            }}
        ></a> */}
            </Box>
        </Drawer>
    );
};

export default ModalDownload;
