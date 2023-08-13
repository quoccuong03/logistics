"use client";

import { useLocale } from "@/hooks/useLocale";

// /app/landingpage/home/home-rec-vi.mp4
// /app/landingpage/home/home-rec-en.mp4
// /app/landingpage/home/home-rec-kr.mp4
export default function VideoInfo() {
    const locale = useLocale();

    const videoHome = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/app/landingpage/home/home-rec-${locale}.mp4`;
    return (
        <div>
            <video
                autoPlay
                muted
                playsInline
                preload="none"
                loop
                className="mx-auto"
            >
                <source src={videoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
