"use client";

import React, { useState } from "react";
const arrayListText = [
	"베이직",
	"엘레강스",
	"보헤미안",
	"미니멀리스트",
	"바캉스",
	"걸리쉬",
	"섹시",
	"스포티",
	"테크웨어",
	"레트로",
	"스트릿",
	"펑크",
	"젠틀맨 / 오피스 (클래식)",
];
export default function SectionThree(props: any): JSX.Element {
	const [indexActive, setIndexActive] = useState(0);
	return (
		<div className="overflow-scroll">
			<div className="mt-[15px]  bg-black lg:py-[20px] py-[10px] px-[30px] lg:px-[15px] flex overflow-y-auto justify-between w-[1014px] lg:w-[1614px]">
				{arrayListText.map((text, index) => (
					<a
						key={text}
						onClick={() => {
							setIndexActive(index);
						}}
						href={`#style-${index}`}
						className={`text-white px-[15px] ${
							index === indexActive ? "text-green-main" : ""
						} text-[9.11px] lg:text-[16px]`}
					>
						{index + 1}. {text}
					</a>
				))}
			</div>
		</div>
	);
}
