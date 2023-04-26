"use client";
import "./index.css";

type Props = {
	data: Array<{
		_id: string;
		refType: string;
		image: Array<Images>;
	}>;
};

type Images = {
	image: Array<
		[
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
			},
		]
	>;
};
export default function Items(props: Props): JSX.Element {
	const { data } = props;
	return (
		<>
			<div className="font-bold mt-[25px] text-[12px]">PHONG CÁCH ĐỀ XUẤT </div>
			<div className="flex flex-wrap gap-[3px] mb-[3px]">
				{data?.map((el) => (
					<div></div>
				))}
			</div>
		</>
	);
}
