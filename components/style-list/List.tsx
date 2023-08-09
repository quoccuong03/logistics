"use client";
import "./index.css";
import { ExclamationIcon } from "@components/icons";
import { useModal } from "@/recoil/hooks";
import Item from "./Item";
import { Box } from "@mui/material";
type Props = {
    items: any[];
    title: string;
};

export default function List({ items, title }: Props) {
    const { onOpenModal } = useModal();
    return (
        <Box className="style-list">
            <div className="font-bold mt-[25px] text-[12px] flex style-list__title">
                {title}
                {/* <div
                    onClick={onOpenModal}
                    className="ml-auto font-medium text-[#999999] text-[11px] flex items-center cursor-pointer"
                >
                    Sponsored{" "}
                    <ExclamationIcon className="ml-[2px] w-[12px] h-[12px]" />
                </div> */}
            </div>
            <div className="flex flex-wrap gap-y-[3px]  mb-[3px] columns-2 mt-[12px]">
                {items?.map((item: any, index) => (
                    <Item item={item} idx={index} key={index} />
                ))}
            </div>
        </Box>
    );
}
