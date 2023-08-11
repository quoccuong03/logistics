"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { getImages } from "@/utils";
import { IconButton } from "@mui/material";
import { ChevronRightIcon } from "../icons";

type Props = {
    images: any[];
};

export default function Carousel({ images }: Props) {
    const items = getImages(images, "large");

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
        <div className="relative ">
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <div className="keen-slider__slide text-center" key={idx}>
                        <Image
                            alt={"Image"}
                            width={item?.width || 500}
                            height={item?.height || 500}
                            quality={100}
                            src={item?.url}
                            className="mx-auto max-w-auto h-auto"
                            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            placeholder="blur"
                        />
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
                        <ChevronRightIcon className="rotate-180 fill-white" />
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
                        <ChevronRightIcon className="fill-white" />
                    </IconButton>
                </div>
            )}
        </div>
    );
}
