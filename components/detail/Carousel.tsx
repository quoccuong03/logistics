"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { getImages } from "@/utils";

type Props = {
    images: any[];
};

export default function Carousel({ images }: Props) {
    const items = getImages(images, "origin");
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
    });
    return (
        <div className="relative min-h-[750px]">
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <div className="keen-slider__slide text-center" key={idx}>
                        <Image
                            alt={"Image"}
                            width={item.width}
                            height={item.height}
                            quality={100}
                            src={item.url}
                            className="mx-auto max-w-auto h-auto"
                            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            placeholder="blur"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
