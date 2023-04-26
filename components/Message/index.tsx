"use client";
import Image from "next/image";
import { TailIcon } from "@components/icons";
import Jesso from "@public/images/jeeso.svg";
import "./index.css";
type data = {
	minToday: string;
	totalCount: number;
};
export default function Message(props: data) {
	const { minToday, totalCount } = props;
	function formatDate(date: string) {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return `${day}-Tháng ${month}-${year}`;
	}

	return (
		<div className="flex">
			<div className="bg-[#FFDCDC] py-[7px] px-[20.33px] rounded-[9.64848px] relative w-[100%] mb-[6px] text-[12.0606px] message-content">
				<TailIcon className="absolute h-[18.71px] w-[24.05px] object-fill bottom-[-3px] right-[-6px]" />
				<div>{formatDate(minToday)}</div>
				<div>
					<strong>{totalCount}</strong> kiểu được Jeesoo đề xuất cho bạn
				</div>
			</div>
			<Image className="h-[53px] w-[53px] ml-[12px]" src={Jesso} alt="jeesso"></Image>
		</div>
	);
}
