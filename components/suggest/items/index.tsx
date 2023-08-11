"use client";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import { ExclamationIcon } from "@components/icons";
import { useModal } from "@/recoil/hooks";
type Props = {
    data: Array<Item>;
};

type Item = {
    _id: string;
    refType: string;
    image: Array<Images>;
};
type Images = [
    {
        large: {
            url: string;
        };
    },
    {
        medium: {
            url: string;
        };
    },
    {
        thumb: {
            url: string;
        };
    }
];
export default function Items(props: Props): JSX.Element {
    const { data } = props;
    const { onOpenModal } = useModal();
    function renderItem(_index: number, _el: Item) {
        return (
            <Link
                key={_index}
                href={`/detail/${_el._id}`}
                className={`suggest-item h-[371.94px] relative ${
                    _index % 2 !== 0 ? "suggest-item-second" : ""
                } `}
            >
                <Image
                    src={
                        // @ts-ignore
                        _el?.image[1]?.medium?.url || _el?.image[0]?.large?.url
                    }
                    className={`
					${!_index ? "rounded-tl-[10px]" : ""} 
					${_index === 1 ? "rounded-tr-[10px]" : ""}  
					${_index === data.length - 2 ? "rounded-bl-[10px]" : ""} 
					${_index === data.length - 1 ? "rounded-br-[10px]" : ""}`}
                    alt="image"
                    fill
                    loading={"lazy"}
                />
            </Link>
        );
    }
    return (
        <>
            <div className="font-bold mt-[25px] text-[12px] flex title-block">
                PHONG CÁCH ĐỀ XUẤT
                <div
                    onClick={onOpenModal}
                    className="ml-auto font-medium text-[#999999] text-[11px] flex items-center cursor-pointer"
                >
                    Sponsored{" "}
                    <ExclamationIcon className="ml-[2px] w-[12px] h-[12px]" />
                </div>
            </div>
            <div className="flex flex-wrap gap-y-[3px]  mb-[3px] columns-2 mt-[12px]">
                {data?.map((el: Item, index) => renderItem(index, el))}
            </div>
        </>
    );
}
