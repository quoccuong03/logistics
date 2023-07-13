"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function SectionFive(props: any): JSX.Element {
	return (
		<div className={`bg-green-main p-[20px] sm:p-[30px]`}>
			<Image
				src={require("@images/logo-small-guide.png")}
				className="sm:w-[95.45px] sm:h-[21px] w-[81.82px] h-[18px] mb-[20px] sm:mb-[30px]"
				alt="logo"
			></Image>
			<div className="uppercase mt-[60px] font-bold sm:mt-[40px] text-[32.95px] sm:text-[53.21px]">
				Showniq
			</div>
			<div className=" tracking-[15px] mb-[60px]  sm:mb-[40px] text-[32.95px] sm:text-[53.21px]">
				Style Guide
			</div>
			<div className="  sm:hidden mb-[20px] sm:mb-[30px]">
				<div className="text-[11px] ">
					<b>SHOWNIQ</b>
				</div>
				<div className="text-[11px]">JOINT STOCK COMPANY</div>
			</div>
			<div className="h-[1px] w-[82px] bg-black sm:h-[2.97px] mb-[20px] sm:mb-[30px]"></div>
			<div className="text-[9px] sm:text-[13.15px]">Showniq Style Guide_2023</div>
			<div className=" hidden sm:block ">
				<div className="text-[13.15px] text-right">
					<b>SHOWNIQ</b>
				</div>
				<div className="text-[13.15px] text-right">JOINT STOCK COMPANY</div>
			</div>
		</div>
	);
}
