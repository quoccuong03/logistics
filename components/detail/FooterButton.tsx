"use client";
import React from "react";
import { FolderHeartIcon, TalkIcon } from "@/components/icons";
import { useModal } from "@/hooks";
interface Props {
    lang: any;
}
export default function FooterButton({ lang }: Props) {
    const { onShow } = useModal();
    return (
        <div className="flex items-center mb-5">
            <button
                onClick={onShow}
                className="flex items-center justify-center py-3 px-5 md:px-20 bg-[#F2F2F2] rounded"
            >
                <FolderHeartIcon className="mr-1" /> <span>2.1K </span>
            </button>
            <button
                onClick={onShow}
                className="flex items-center justify-center py-3 px-5 md:px-20 bg-[#FFA1A1] rounded ml-2 flex-1 flex-shrink-0"
            >
                <TalkIcon className="mr-1 fill-white" />{" "}
                <span className=" text-white">{lang?.btnChat}</span>
            </button>
        </div>
    );
}
