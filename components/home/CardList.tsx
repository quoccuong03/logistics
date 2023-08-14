"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box, Stack } from "@mui/material";
import CardItem from "./CardItem";
import { useModal } from "@/hooks";

interface Props {
    items: any[];
    lang: any;
}

export default function CardList({ items, lang }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { onShow } = useModal();
    const [loaded, setLoaded] = useState(false);
    const [selected, setSelected] = useState<any>([]);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 1.95, spacing: 10 },
            },
        },
        slides: {
            origin: "auto",
            perView: 1.855,
            spacing: 30,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const handleClick = (key: number) => {
        if (key <= 2) {
            setSelected((current: any) => [...current, key]);
        } else {
            onShow();
        }
    };

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {items.map((item: any, idx: number) => (
                    <CardItem
                        item={item}
                        key={idx}
                        idx={idx}
                        onShow={handleClick}
                        itemsSelected={selected}
                        lang={lang}
                    />
                ))}
            </div>
            {loaded && instanceRef.current && (
                <Stack
                    className="dots"
                    direction={"row"}
                    justifyContent={"space-between"}
                    spacing={2.5}
                    sx={{
                        pt: { xs: 2.5, sm: 4.375 },
                        pr: { xs: 2.5, sm: 6.25 },
                        "& .item": {
                            "&-left": {
                                width: 0.8,
                            },
                            "&-right": {
                                width: 0.2,
                                span: {
                                    fontSize: { xs: 15, sm: 20 },
                                    fontWeight: 700,
                                    display: "inline-flex",

                                    "&.white": {
                                        color: "#fff",
                                    },
                                    "&.black": {
                                        color: "#333",
                                    },
                                    "&.dot": {
                                        width: 15,
                                    },
                                },
                            },
                        },
                        "& .dot": {
                            width: 0.1,
                            height: 3,
                            bgcolor: "#fff",
                            "&.active": {
                                bgcolor: "#000",
                            },
                        },
                    }}
                >
                    <Box className="item item-left">
                        {[
                            // @ts-ignore
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx: any) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={
                                        "dot" +
                                        (currentSlide >= idx ? " active" : "")
                                    }
                                />
                            );
                        })}
                    </Box>
                    <Stack
                        className="item item-right"
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <span className="black">
                            {currentSlide < 9
                                ? `0${currentSlide + 1}`
                                : currentSlide + 1}
                        </span>
                        <span className="dot" />
                        <span className="white">
                            {instanceRef.current.track.details.slides.length}
                        </span>
                    </Stack>
                </Stack>
            )}
        </>
    );
}
