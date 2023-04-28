"use client";

import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import { ExpanIcon, CollapseIcon } from "@components/icons";
import TreeItem from "@mui/lab/TreeItem";
import Image from "next/image";
type Props = {
	data: Array<any>;
};
export default function Info(props: Props): JSX.Element {
	const { data } = props;
	const [selected, setSelected] = useState(Array<string>);

	function handleChange(value: string) {
		if (selected.indexOf(value) === -1) {
			selected.push(value);
			setSelected([...selected]);
		} else {
			setSelected(selected.filter((item) => item !== value));
		}
	}
	return (
		<>
			<TreeView
				aria-label="file system navigator"
				onNodeSelect={(e: any, value: any) => {
					handleChange(value);
				}}
			>
				{data?.map((item, index) => (
					<TreeItem
						nodeId={`${index}`}
						key={index}
						className="info-item px-[20px] py-[15px] mb-[18px]"
						label={
							<div className="flex  items-center ">
								<div className="w-[100%] font-bold text-[14px]">{item.title}</div>
								{selected.indexOf(`${index}`) === -1 ? (
									<CollapseIcon className="info-icon w-[14px]" />
								) : (
									<ExpanIcon className="info-icon w-[14px]" />
								)}
							</div>
						}
					>
						<TreeItem
							nodeId={`${index}-child`}
							label={
								<>
									<div
										dangerouslySetInnerHTML={{
											__html: item.content.replace(/\n/g, "<br/>"),
										}}
										className=" mt-[21px]  font-medium info-item-child"
									></div>
									<div className="items-center  flex justify-center">
										<div className="h-[264px] w-[197px] relative mt-[20px] mb-[20px]">
											<Image
												src={item.image}
												alt="img"
												loading={"lazy"}
												fill
												style={{
													objectFit: "cover",
												}}
											/>
										</div>
									</div>
								</>
							}
						></TreeItem>
					</TreeItem>
				))}
			</TreeView>
		</>
	);
}
