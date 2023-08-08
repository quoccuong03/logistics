"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Box, IconButton, Stack } from "@mui/material";
import { ChevronRightIcon } from "@/components/icons";
import CardItem from "./CardItem";

interface Props {
    items: any[];
}

export default function CardList({ items }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        // loop: true,
        slides: {
            // origin: "center",
            perView: 1.8,
            spacing: 30,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <div
            className="relative min-h-[500px] md:min-h-[685px] 
        bg-gradient-to-t from-[#FFA1A1] from-0% via-[#F1F4E2] via-81.25% to-[#FCF5E6] to-99.44%
        pt-[30px] md:pt-[80px]"
        >
            <div ref={sliderRef} className="keen-slider pl-[20px] md:pl-[50px]">
                {items.map((item: any, idx: number) => (
                    <CardItem item={item} key={idx} idx={idx} />
                ))}
            </div>
            {loaded && instanceRef.current && (
                <Stack
                    className="dots"
                    direction={"row"}
                    justifyContent={"space-between"}
                    sx={{
                        "& .dot": {
                            width: 0.1,
                            height: 3,
                            bgcolor: "#fff",
                        },
                    }}
                >
                    <Box>
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
                                        (currentSlide === idx ? " active" : "")
                                    }
                                />
                            );
                        })}
                    </Box>

                    <div>
                        <span>{currentSlide + 1}</span>
                        <span>
                            {instanceRef.current.track.details.slides.length}
                        </span>
                    </div>
                </Stack>
            )}
        </div>
    );
}
