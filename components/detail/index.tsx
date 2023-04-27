"use client";
import { useStore } from "@/recoil/hooks";
import React, { useEffect } from "react";
import Carousel from "./Carousel";
import {
    LockIcon,
    InfoOutlineIcon,
    HeartIcon,
    UploadIcon,
} from "@/components/icons";

type Props = {
    data: any;
};

export default function DetailPageClient({ data }: Props) {
    const { onShowStore } = useStore();

    useEffect(() => {
        onShowStore(data?.store);
    }, [data]);

    return (
        <div>
            <Carousel images={data?.image || []} />
            <div className="flex items-start justify-between mt-3">
                <div className="flex items-center">
                    <LockIcon className="fill-none stroke-black text-[20px]" />{" "}
                    <span className="text-[11px]">
                        {data.store.accountType.title.vi}
                    </span>{" "}
                    <InfoOutlineIcon className="fill-[#888888] text-[22px] pl-1" />
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col justify-center items-center mr-4">
                        <HeartIcon className="text-[22px]" />
                        <span className="text-[11px]">{data.likedCnt}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <UploadIcon className="fill-none stroke-black text-[22px]" />
                        <span className="text-[11px]">{data.sharedCnt}</span>
                    </div>
                </div>
            </div>
            <div
                className="my-10 "
                dangerouslySetInnerHTML={{
                    __html: data?.description.replace(/\n/g, "<br />"),
                }}
            />
        </div>
    );
}
