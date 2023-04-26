"use client";
import "keen-slider/keen-slider.min.css";
import Carousel from "@/components/home/Carousel";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";

export default function HomePage() {
    return (
        <div>
            <Carousel />
            <Section2 />
            <Section3 />
        </div>
    );
}
