"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { IconButton } from "@mui/material";
import { ChevronRightIcon } from "@/components/icons";
const items = [
    {
        title: "Geesoo",
        img: "https://static.showniq.ai/public/app/general/ai_stylist/women/jeesoo_1_vi.gif",
        video: "https://static.showniq.ai/public/app/general/ai_stylist/women/jeesoo_1_vi.mp4",
    },
    {
        title: "Geesoo",
        img: "https://static.showniq.ai/public/app/general/ai_stylist/men/geesoo_1_vi.gif",
        video: "https://static.showniq.ai/public/app/general/ai_stylist/men/geesoo_1_vi.mp4",
    },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });
    return (
        <div className="relative min-h-[700px] md:min-h-[1209px] bg-[#fdf6ea]">
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <div className="keen-slider__slide text-center" key={idx}>
                        <video
                            // width="448"
                            // height="965"
                            autoPlay
                            muted
                            playsInline
                            preload="none"
                            loop
                            className="mx-auto max-w-xs md:max-w-lg mt-4"
                        >
                            <source src={item.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* <Image
                            alt={item.title}
                            width={480}
                            height={1034}
                            src={item.img}
                            className="mx-auto"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        /> */}
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
                <div className="flex justify-between absolute left-0 right-0 top-[50%]">
                    <IconButton
                        className="btn btn-prev"
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    >
                        <ChevronRightIcon className=" rotate-180" />
                    </IconButton>
                    <IconButton
                        className="btn btn-next"
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            )}
        </div>
    );
}
