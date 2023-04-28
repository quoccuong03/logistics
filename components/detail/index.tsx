"use client";
import { useModal, useStore } from "@/recoil/hooks";
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
    const { onOpenModal } = useModal();
    useEffect(() => {
        onShowStore(data?.store);
    }, [data]);

    return (
        <div>
            <Carousel images={data?.image || []} />
            <div className="flex items-start justify-between mt-3">
                <button className="flex items-center" onClick={onOpenModal}>
                    <LockIcon className="fill-none stroke-black text-[20px]" />{" "}
                    <span className="text-[11px]">
                        {data.store.accountType.title.vi}
                    </span>{" "}
                    <InfoOutlineIcon className="fill-[#888888] text-[20px] pl-2" />
                </button>
                <div className="flex items-center">
                    <button
                        className="flex flex-col justify-center items-center mr-4"
                        onClick={onOpenModal}
                    >
                        <HeartIcon className="text-[22px]" />
                        <span className="text-[11px]">{data.likedCnt}</span>
                    </button>
                    <button
                        className="flex flex-col justify-center items-center"
                        onClick={onOpenModal}
                    >
                        <UploadIcon className="fill-none stroke-black text-[22px]" />
                        <span className="text-[11px]">{data.sharedCnt}</span>
                    </button>
                </div>
            </div>
            <div
                className="my-10 sm:tex-xs"
                dangerouslySetInnerHTML={{
                    __html: data?.description.replace(/\n/g, "<br />"),
                }}
            />
        </div>
    );
}
