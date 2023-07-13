"use client";

import React, { useState } from "react";
import Image from "next/image";
const Data = [
	{
		title: "베이직",
		type: "BASIC",
		des: (
			<>
				가장 쉬우면서도 기본이 되는 스타일입니다. 베이직은 말그대로 심플한 핏의 기본 아이템
				으로 연출한 스타일입니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 베이직 핏 (상의-기본핏 / 하의 -스트레이트,스키니)
			</>
		),
		footerColor: "bg-green-main bottom-[-60px]",
		parentFooter: "mb-[60px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-mobile.png")}
					className=" h-[202.83px] w-[313.35px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-mobile.png")}
					className=" h-[357px] w-[332px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "엘레강스",
		type: "ELEGANCE",
		des: (
			<>
				<b>가는 허리, 부드러운 어깨를 표현하여 여성의 우아함을 강조한 스타일</b>
				<br /> 소재(질감), 모노그램 패턴과 브랜드 로고, 아이템으로구분이 됩니다. 이<br />
				스타일에 속하는 아이템은 여성 드레스, 자켓, 스커트 정도 입니다.
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위</b>- 소재 / 아이템 / 패턴 / 악세서리 / 브랜드 대표적
			</>
		),
		footerColor: "bg-strawberry-amin bottom-[0px]",
		parentFooter: "mb-[60px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-two-mobile.png")}
					className=" h-[202.83px] w-[313.35px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-two-mobile.png")}
					className=" h-[357px] w-[332px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
	},
];
export default function SectionFour(props: any): JSX.Element {
	return (
		<>
			{Data.map((item, index) => (
				<div className="mt-[15px] sm:mt-[20px] bg-white ">
					<div className="pt-[40px] sm:pt-[60px] px-[20px] sm:px-[30px]">
						<div className="text-[16px] sm:text-[22px] font-bold">
							{index + 1}. {item.title}
						</div>
						<div className="text-[12px] sm:text-[16px]">{item.type}</div>
						<div className="text-[11px] sm:text-[15px] mb-[30px]">{item.des}</div>
					</div>
					<div
						className={`relative flex justify-center sm:hidden flex-col items-center ${item.parentFooter}`}
					>
						{item.imageRight}
						<div
							className={`text-[10px] ${item.footerColor} absolute w-full z-10 px-[20px] py-[10px] `}
						>
							{item.footer}
						</div>
					</div>
					<div className="relative flex justify-center sm:hidden flex-col items-center pb-[40px]">
						{item.imageLeft}
					</div>
				</div>
			))}
		</>
	);
}
