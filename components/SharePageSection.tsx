"use client";
import { configs } from "@/config/constants";
import querystring from "querystring";
import { useEffect, useRef } from "react";
type Props = {
    platform: string;
    urlApp: string;
    urlDownload: string;
    screen: string;
};

export default function SharePageSection({
    platform,
    screen,
    urlApp,
    urlDownload,
}: Props) {
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) return;
        if (platform !== "pc") {
            isMounted.current = true;
            // document.location = configs[platform];
            if (
                confirm(
                    "Bạn chưa cài đặt APP SHOWNIQ, bạn có muốn đi đến cửa hàng để tải APP không?"
                )
            ) {
                setTimeout(function () {
                    document.location = urlDownload;
                }, 2000);
                if (urlApp) {
                    document.location = urlApp;
                }
                // window.close();
            }
            return;
        } else {
            window.location.href = urlDownload;
        }
    }, []);
    return <></>;
}
