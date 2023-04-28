"use client";
import { FilterIcon } from "@components/icons";
import "./index.css";
import { useModal } from "@/recoil/hooks";
type Props = {
	data: Array<any>;
	lang: string;
	gender: string;
};
export default function Filter(props: Props): JSX.Element {
	const { data, gender, lang } = props;
	const dataActive = data?.filter((item) => item[`memberAction${gender}`]?.actionType);
	const dataInActive = data?.filter((item) => !item[`memberAction${gender}`]?.actionType);
	const { onOpenModal } = useModal();
	return (
		<div className="flex mt-[36px] text-[12px]  items-center filter">
			<FilterIcon className="filterIcon" />{" "}
			<div className="ml-[6px] min-w-[40px]">Bộ lọc</div>
			<div
				onClick={onOpenModal}
				className="bg-[#FFA1A1] px-[5px] py-[3px] rounded-[3px] text-[12px] font-bold text-[#fff] ml-[14px] cursor-pointer"
			>
				W
			</div>
			<div
				onClick={onOpenModal}
				className="bg-[#FAFAFA] text-[#999999] px-[5px] py-[3px] rounded-[3px]  text-[12px] font-bold ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer"
			>
				M
			</div>
			<div className="ml-[19px]"></div>
			<div className="flex items-center overflow-x-auto">
				{dataActive?.map((item) => (
					<div
						onClick={onOpenModal}
						key={item[`title${lang}`]}
						className="bg-[#FAFAFA] text-center min-w-[90px] text-[#FFA1A1] px-[5px] py-[3px] rounded-[3px]  text-[12px]  ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer"
					>
						#{item[`title${lang}`]}
					</div>
				))}
				{dataInActive?.map((item) => (
					<div
						onClick={onOpenModal}
						key={item[`title${lang}`]}
						className="bg-[#FAFAFA] text-center min-w-[90px] text-[##999999] px-[5px] py-[3px] rounded-[3px]  text-[12px]  ml-[6px] hover:bg-[#FFA1A1] hover:text-[#fff] cursor-pointer"
					>
						#{item[`title${lang}`]}
					</div>
				))}
			</div>
		</div>
	);
}
