"use client";
import { useStore } from "@/recoil/hooks";
import React, { useEffect } from "react";
type Props = {
    data: any;
};
export default function DetailPageClient({ data }: Props) {
    console.log("data", data);

    const { onShowStore } = useStore();
    useEffect(() => {
        onShowStore(data?.store);
    }, [data]);
    return <div>index</div>;
}
