import React from "react";
import { FilterIcon } from "./icons";
import { useModal } from "@/hooks";

interface Props {
    items: any[];
    title: string;
}

export default function FilterStyle({ items, title }: Props) {
    const { onShow } = useModal();
    return (
        <div className="flex mt-[36px] text-[12px]  items-center filter">
            <FilterIcon sx={{ fill: "none", fontSize: 16 }} />
            <div className="ml-[6px] min-w-[40px]">{title}</div>
            <div
                onClick={onShow}
                className="bg-[#FFA1A1] px-[5px] py-[3px] rounded-[3px] text-[12px] font-bold text-[#fff] ml-[14px] cursor-pointer"
            >
                W
            </div>
            <div
                onClick={onShow}
                className="bg-[#FAFAFA] text-[#999999] px-[5px] py-[3px] rounded-[3px]  text-[12px] font-bold ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer"
            >
                M
            </div>
            <div className="ml-[19px]"></div>
            <div className="flex items-center overflow-x-auto">
                {items?.map((item: any, idx: number) => (
                    <div
                        onClick={onShow}
                        key={idx}
                        className={`bg-[#FAFAFA] text-center min-w-[90px] ${
                            idx < 3 ? "text-[#FFA1A1]" : "text-[#999999]"
                        } px-[5px] py-[3px] rounded-[3px]  text-[12px]  ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer`}
                    >
                        #{item.label}
                    </div>
                ))}
                {/* {dataInActive?.map((item) => (
                    <div
                        onClick={onOpenModal}
                        key={item[`title${lang}`]}
                        className="bg-[#FAFAFA] text-center min-w-[90px] text-[##999999] px-[5px] py-[3px] rounded-[3px]  text-[12px]  ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer"
                    >
                        #{item[`title${lang}`]}
                    </div>
                ))} */}
            </div>
        </div>
    );
}
