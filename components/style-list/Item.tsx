import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getImageUrl } from "@/utils";
interface Props {
    item: any;
    idx: number;
}
export default function Item({ item, idx }: Props) {
    const imgUrl = getImageUrl(item.image, "large");

    return (
        <Link
            href={`/detail/${item._id}`}
            className={`suggest-item h-[371.94px] relative ${
                idx % 2 !== 0 ? "suggest-item-second" : ""
            } `}
        >
            <Image
                src={imgUrl?.[0]}
                //      className={`
                // ${!idx ? "rounded-tl-[10px]" : ""}
                // ${idx === 1 ? "rounded-tr-[10px]" : ""}
                // ${idx === data.length - 2 ? "rounded-bl-[10px]" : ""}
                // ${idx === data.length - 1 ? "rounded-br-[10px]" : ""}`}
                alt="image"
                fill
                loading={"lazy"}
            />
        </Link>
    );
}
