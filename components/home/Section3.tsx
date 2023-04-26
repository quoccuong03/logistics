"use client";
import React, { useRef } from "react";
import Image from "next/image";
import bg from "@images/bg-1.png";
import { Button, Icon } from "@mui/material";
import { ArrowRightIcon, DownloadIcon, RotateIcon } from "@/components/icons";

export default function Section3() {
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        // @ts-ignore
        vidRef?.current?.play();
    };
    return (
        <div className="bg-[#FDF5E7] relative min-h-[1268px] px-[26px]">
            <div className="text-center mx-20 pt-[111px]">
                <h2 className="text-[30px] font-bold leading-9 mb-3">
                    Với thao tác đơn giản
                </h2>
                <p className="text-[20px] font-light leading-6">
                    Nhận ngay đề xuất phong cách thời trang <br />
                    phù hợp sở thích
                </p>
            </div>
            <div className="flex flex-col mt-12 items-center">
                <Button
                    endIcon={<RotateIcon />}
                    variant="contained"
                    className="bg-[#6EFFB3] text-sm text-black text-inherit mb-7 min-w-[132px] shadow-none hover:bg-white rounded-md"
                    sx={{
                        textTransform: "initial !important",
                        svg: {
                            fontSize: "14px !important",
                        },
                    }}
                    onClick={handlePlayVideo}
                >
                    Xem lại
                </Button>
                <video
                    width="334"
                    height="723"
                    autoPlay
                    playsInline
                    ref={vidRef}
                >
                    <source
                        src="https://static.showniq.ai/public/app/landingpage/home/HDSD.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="mt-[72px]">
                <Button
                    endIcon={<ArrowRightIcon />}
                    className="bg-[#FF8CA8] text-base font-bold text-black flex justify-end min-h-[48px]"
                    variant="contained"
                    fullWidth
                    sx={{
                        textTransform: "initial !important",
                        // "& .MuiButton-endIcon": {
                        //     mx: "auto",
                        // },
                    }}
                >
                    <span className="mx-auto">Đến đề xuất ngay</span>
                </Button>
                <Button
                    endIcon={<DownloadIcon />}
                    className="text-base font-bold text-black flex justify-end mt-4 min-h-[48px]"
                    variant="contained"
                    fullWidth
                    sx={{
                        textTransform: "initial !important",
                        background:
                            "linear-gradient(90deg, #71EAB0 4.3%, #71EAB0 26.74%, #FFC1C1 58.52%, #FFA1A1 94.04%) !important",
                        // "& .MuiButton-endIcon": {
                        //     mx: "auto",
                        // },
                    }}
                >
                    <span className="mx-auto">Xem hơn 40,000 phong cách</span>
                </Button>
            </div>
        </div>
    );
}
