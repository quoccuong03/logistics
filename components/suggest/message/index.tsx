"use client";
import Image from "next/image";
import { TailIcon } from "@components/icons";
import "./index.css";
import AnimatedText from "./animationText";
type data = {
	minToday: string;
	totalCount: number;
};
const linkIcon = `https://static.showniq.ai/public/app/general/ai_stylist/women/jeesoo_3_150.gif`;
export default function Message(props: data) {
	const { minToday, totalCount } = props;
	function formatDate(date: string) {
		let d = new Date(),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return `${day}-Tháng ${month}-${year}`;
	}

	return (
		<div className="flex">
			<div className="bg-[#FFDCDC] py-[7px] px-[20.33px] rounded-[9.64848px] relative w-[100%] mb-[3px] text-[12.0606px] message-content">
				<TailIcon className="absolute h-[18.71px] w-[24.05px] object-fill bottom-[-3px] right-[-6px]" />

				<AnimatedText
					text={formatDate(minToday)}
					textTow={
						<>
							<strong>{totalCount}</strong> kiểu được Jeesoo đề xuất cho bạn
						</>
					}
				></AnimatedText>
			</div>
			<div className="h-[53px] w-[53px] ml-[12px] relative">
				<Image
					src={linkIcon}
					alt="jeesso"
					fill
					style={{
						objectFit: "cover",
					}}
				></Image>
			</div>
		</div>
	);
}
