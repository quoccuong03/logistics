"use client";
import "keen-slider/keen-slider.min.css";
import Carousel from "@/components/home/Carousel";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { HIDE_POPUP } from "@/config/constants";
import ModalDownload from "@/components/home/ModalDownload";

export default function HomePage() {
    const [showPopup] = useLocalStorage<any>(HIDE_POPUP, "");
    const [downloadApp, setDownloadApp] = useState({
        isOpen: false,
        img: require("@images/download-app.png"),
        url: "/download",
        id: "banner-160323",
        buttonText: "Đặt trước ngay",
    });
    const handlerClose = () => {
        setDownloadApp((prev: any) => ({ ...prev, isOpen: false }));
    };
    useEffect(() => {
        if (!showPopup) {
            const timer = setTimeout(() => {
                setDownloadApp((prev: any) => ({ ...prev, isOpen: true }));
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div>
            <Carousel />
            <Section2 />
            <Section3 />
            <ModalDownload
                isOpen={downloadApp.isOpen}
                data={downloadApp}
                onClose={handlerClose}
            />
        </div>
    );
}
