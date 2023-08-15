"use client";

import { useLocale } from "@/hooks/useLocale";
import { useEffect, useState } from "react";

// /app/landingpage/home/home-rec-vi.mp4
// /app/landingpage/home/home-rec-en.mp4
// /app/landingpage/home/home-rec-kr.mp4
export default function VideoInfo() {
    const locale = useLocale();
    const [videoUrl, setVideoUrl] = useState<string>();
    useEffect(() => {
        setVideoUrl(
            `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/app/landingpage/home/home-rec-${locale}.mp4`
        );
    }, [locale]);
    // const videoHome = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/app/landingpage/home/home-rec-${locale}.mp4`;
    return (
        <div className="min-h-[375px] md:min-h-[645px]">
            {videoUrl ? (
                <video
                    autoPlay
                    muted
                    playsInline
                    preload="none"
                    loop
                    className="mx-auto"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : null}
        </div>
    );
}
