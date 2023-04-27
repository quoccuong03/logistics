"use client";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
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
	},
];
export default function Items(props: Props): JSX.Element {
	const { data } = props;

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
					// @ts-ignore
					src={_el?.image[1]?.medium?.url || _el?.image[0]?.large?.url}
					className={`
					${!_index ? "rounded-tl-[10px]" : ""} 
					${_index === 1 ? "rounded-tr-[10px]" : ""}  
					${_index === data.length - 2 ? "rounded-bl-[10px]" : ""} 
					${_index === data.length - 1 ? "rounded-br-[10px]" : ""}`}
					alt="image"
					fill
				/>
			</Link>
		);
	}
	return (
		<>
			<div className="font-bold mt-[25px] text-[12px]">PHONG CÁCH ĐỀ XUẤT </div>
			<div className="flex flex-wrap gap-y-[3px]  mb-[3px] columns-2 mt-[12px]">
				{data?.map((el: Item, index) => renderItem(index, el))}
			</div>
		</>
	);
}
