"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function SectionFive(props: any): JSX.Element {
	return (
		<div className={`bg-green-main p-[20px] lg:p-[30px]`}>
			<div data-aos="zoom-in">
				<Image
					src={require("@images/logo-small-guide.png")}
					className="lg:w-[95.45px] lg:h-[21px] w-[81.82px] h-[18px] mb-[20px] lg:mb-[30px]"
					alt="logo"
				></Image>
			</div>
			<div className="uppercase mt-[60px] font-bold lg:mt-[40px] text-[32.95px] lg:text-[53.21px]">
				Showniq
			</div>
			<div className=" tracking-[10px] mb-[60px]  lg:mb-[40px] text-[32.95px] lg:text-[53.21px]">
				Style Guide
			</div>
			<div className="  lg:hidden mb-[20px] lg:mb-[30px]">
				<div className="text-[11px] ">
					<b>SHOWNIQ</b>
				</div>
				<div className="text-[11px]">JOINT STOCK COMPANY</div>
			</div>
			<div className="h-[1px] w-[82px] bg-black lg:h-[2.97px] mb-[20px] lg:mb-[30px]"></div>
			<div className="text-[9px] lg:text-[13.15px]">Showniq Style Guide_2023</div>
			<div className=" hidden lg:block ">
				<div className="text-[13.15px] text-right">
					<b>SHOWNIQ</b>
				</div>
				<div className="text-[13.15px] text-right">JOINT STOCK COMPANY</div>
			</div>
		</div>
	);
}
