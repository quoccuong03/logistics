"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { ArrowRightIcon, RotateIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function Section3() {
    const vidRef = useRef(null);
    const router = useRouter();
    const [isShow, setIsShow] = useState<boolean>(false);
    const handlePlayVideo = () => {
        // @ts-ignore
        vidRef?.current?.play();
    };

    const handlerGoto = () => {
        router.push("/suggest");
    };

    return (
        <div className="bg-[#FDF5E7] relative pb-[20px] px-[26px]">
            <div className="text-center mx-20 pt-[111px]">
                <h2 className="text-[30px] font-bold leading-9 mb-3">
                    Với thao tác đơn giản
                </h2>
                <p className="text-[20px] font-light leading-6">
                    Nhận ngay đề xuất phong cách thời trang <br />
                    phù hợp sở thích
                </p>
            </div>
            <div className="flex flex-col mt-7 items-center">
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
                    muted
                    playsInline
                    preload="none"
                    ref={vidRef}
                    onEnded={() => setIsShow(true)}
                >
                    <source
                        src="https://static.showniq.ai/public/app/landingpage/home/HDSD.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {isShow && (
                <div className="mt-[72px] sticky bottom-20 lef-[26px] right-[26px]">
                    <Button
                        endIcon={<ArrowRightIcon />}
                        className="bg-[#FF8CA8] text-base font-bold text-black flex justify-end min-h-[48px]"
                        variant="contained"
                        fullWidth
                        disableRipple
                        onClick={handlerGoto}
                        sx={{
                            textTransform: "initial !important",
                            // "& .MuiButton-endIcon": {
                            //     mx: "auto",
                            // },
                        }}
                    >
                        <span className="mx-auto">Đến đề xuất ngay</span>
                    </Button>
                </div>
            )}
        </div>
    );
}
