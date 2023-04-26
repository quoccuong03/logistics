"use client";
import Image from "next/image";
import { FilterIcon } from "@components/icons";
import Jesso from "@public/images/jeeso.svg";
import "./index.css";
type data = {
	minToday: string;
	totalCount: number;
};
export default function Filter(props: data) {
	return (
		<div className="flex mt-[36px] text-[12px] flex-wrap items-center">
			<FilterIcon /> <div className="ml-[6px]">Bộ lọc</div>
			<div className="bg-[#FFA1A1] p-[5px] rounded-[3px] text-[12px] font-bold text-[#fff] ml-[14px] cursor-pointer">
				W
			</div>
			<div className="bg-[#FAFAFA] p-[5px] rounded-[3px]  text-[12px] font-bold ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer">
				M
			</div>
		</div>
	);
}
