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
        <div className="bg-[#FDF5E7] relative pb-[20px] px-[20px] md:px-[26px]">
            <div className="text-center mx-20 pt-[60px] md:pt-[111px]">
                <h2 className="text-[15px] md:text-[30px] font-bold leading-5 md:leading-9 mb-2 md:mb-3">
                    Với thao tác đơn giản
                </h2>
                <p className="text-[14px] md:text-[20px] font-light leading-4 md:leading-6">
                    Nhận ngay đề xuất phong cách thời trang <br />
                    phù hợp sở thích
                </p>
            </div>
            <div className="flex flex-col mt-3 md:mt-7 items-center pb-20">
                <Button
                    endIcon={<RotateIcon />}
                    variant="contained"
                    className="bg-[#6EFFB3] text-sm text-black text-inherit mb-3 md:mb-7 min-w-[132px] shadow-none hover:bg-white rounded-md"
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
                <div className="inline-flex p-3 bg-[#ffffff] bg-opacity-50 rounded-lg">
                    <video
                        // width="334"
                        // height="723"
                        autoPlay
                        muted
                        playsInline
                        preload="none"
                        ref={vidRef}
                        onEnded={() => setIsShow(true)}
                        className="max-w-full md:max-w-[334px] rounded-lg"
                    >
                        <source
                            src="https://static.showniq.ai/public/app/landingpage/home/HDSD.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {isShow && (
                <div className="mt-[72px] fixed bottom-20 lef-0 right-0 text-center w-full z-50">
                    <Button
                        endIcon={<ArrowRightIcon />}
                        className="bg-[#FF8CA8] text-base font-bold text-black flex justify-end min-h-[48px] mx-auto max-w-[calc(100%-40px)] md:max-w-[594px]"
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
