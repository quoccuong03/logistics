"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import { ChevronRightIcon, HeartIcon } from "../icons";
import { getImageUrl, getImages } from "@/utils";
import Link from "next/link";
import { useStore } from "@/recoil/hooks";
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
    storeName?: boolean;
};

export default function RelatedCarousel({ items, title, storeName }: Props) {
    const { currentStore } = useStore();
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
            <h3 className="text-xs font-bold mb-2">{`${title} ${
                storeName ? currentStore?.name : ""
            }`}</h3>
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <div
                        className="keen-slider__slide text-center relative"
                        key={idx}
                    >
                        <Link href={`/detail/${item._id}`} className="block">
                            <Image
                                alt={"Image"}
                                width={item.image.thumb.width}
                                height={item.image.thumb.height}
                                src={item.image.thumb.url}
                                className="mx-auto max-w-auto h-auto"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                placeholder="blur"
                                quality={100}
                            />
                        </Link>
                        <HeartIcon className="fill-white absolute bottom-3 right-3 z-10" />
                    </div>
                ))}
            </div>
        </div>
    );
}
