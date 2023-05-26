"use client";
import { configs } from "@/config/constants";
import querystring from "querystring";
import { useEffect, useRef } from "react";
type Props = {
    platform: string;
};

export default function SharePageSection({ platform }: Props) {
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) return;
        const redirectUrl = configs.downloadLink?.[platform];

        if (platform !== "pc") {
            isMounted.current = true;
            document.location = configs[platform];
            if (
                confirm(
                    "Bạn chưa cài đặt APP SHOWNIQ, bạn có muốn đi đến cửa hàng để tải APP không?"
                )
            ) {
                window.location.href = redirectUrl;
                window.close();
            }
            return;
        } else {
            console.log("redirectUrl", redirectUrl);

            // window.location.href = redirectUrl;
        }
    }, []);
    return <></>;
}
