"use client";
import { useModal, useCurrentStore } from "@/hooks";
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
    lang: string;
};

export default function DetailPageClient({ data, lang }: Props) {
    const { setCurrentStore } = useCurrentStore();
    const { onShow } = useModal();
    useEffect(() => {
        setCurrentStore(data?.store);
    }, [data]);

    return (
        <div>
            <Carousel images={data?.image || []} />
            <div className="flex items-start justify-between mt-2 md:mt-3">
                <button className="flex items-center" onClick={onShow}>
                    <LockIcon className="fill-none stroke-black text-[20px]" />{" "}
                    <span className="text-[11px]">
                        {data.store.accountType.title[lang]}
                    </span>{" "}
                    <InfoOutlineIcon className="fill-[#888888] text-[20px] pl-2" />
                </button>
                <div className="flex items-center">
                    <button
                        className="flex flex-col justify-center items-center mr-4"
                        onClick={onShow}
                    >
                        <HeartIcon className="text-[22px]" />
                        <span className="text-[11px]">{data.likedCnt}</span>
                    </button>
                    <button
                        className="flex flex-col justify-center items-center"
                        onClick={onShow}
                    >
                        <UploadIcon className="fill-none stroke-black text-[22px]" />
                        <span className="text-[11px]">{data.sharedCnt}</span>
                    </button>
                </div>
            </div>
            <div
                className="my-5 md:my-10 text-xs md:text-sm"
                dangerouslySetInnerHTML={{
                    __html: data?.description?.replace(/\n/g, "<br />"),
                }}
            />
        </div>
    );
}
