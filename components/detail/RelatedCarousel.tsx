"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import { ChevronRightIcon } from "../icons";
import { getImageUrl, getImages } from "@/utils";
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

type Props = {
    items: any[];
    title: string;
};

export default function RelatedCarousel({ items, title }: Props) {
    // const items = getImages(images, "origin");
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slides: {
            perView: 2.5,
            spacing: 3,
        },
    });
    return (
        <div className="relative ">
            <h3 className="text-xs font-bold mb-2">{title}</h3>
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <div className="keen-slider__slide text-center" key={idx}>
                        <Image
                            alt={"Image"}
                            width={item.image.thumb.width}
                            height={item.image.thumb.height}
                            src={item.image.thumb.url}
                            className="mx-auto max-w-auto h-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
