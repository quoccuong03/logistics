"use client";

import { i18n } from "@/config/i18n-config";
import { usePathname } from "next/navigation";

// /app/landingpage/home/home-rec-vi.mp4
// /app/landingpage/home/home-rec-en.mp4
// /app/landingpage/home/home-rec-kr.mp4
export default function VideoInfo() {
    const pathname = usePathname();
    const segments = pathname?.split("/");
    const videoHome = `${
        process.env.NEXT_PUBLIC_BASE_URL
    }/uploads/app/landingpage/home/home-rec-${
        segments?.[1] || i18n.defaultLocale
    }.mp4`;
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
