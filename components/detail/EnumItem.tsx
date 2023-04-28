"use client";
import Image from "next/image";

import { useCallback, useState } from "react";
type Props = {
    emoji: any;
};
export default function EnumItem({ emoji }: Props) {
    const [currentImg, setCurrentImg] = useState<string>("");
    const handlerChangeImage = useCallback(
        (e: any, img: string) => {
            setCurrentImg(img);
        },
        [emoji]
    );
    return (
        <div className="flex items-center mx-1 md:mx-2 flex-col hover:cursor-pointer">
            <Image
                width={20}
                height={20}
                src={currentImg || emoji?.optional?.image?.women?.inactive}
                alt={emoji?.title?.vi || ""}
                onMouseEnter={(e) =>
                    handlerChangeImage(e, emoji?.optional?.image?.women?.active)
                }
                onMouseLeave={(e) =>
                    handlerChangeImage(
                        e,
                        emoji?.optional?.image?.women?.inactive
                    )
                }
            />
            <span className="text-[8px] md:text-[9px] inline-flex mt-2">
                {emoji?.title?.vi}
            </span>
        </div>
    );
}
