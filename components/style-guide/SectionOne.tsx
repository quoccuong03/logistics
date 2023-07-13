"use client";

import React, { useState } from "react";
import Image from "next/image";
export default function SectionOne(props: any): JSX.Element {
	const { title } = props;
	return (
		<>
			<div className="relative  w-100 md:h-[506px] h-[380px] styleGuid__background flex justify-center items-center">
				<div className="text-[34.58px] font-bold sm:text-[54.26px] text-[#fff] uppercase">
					{title}
				</div>
				<Image
					src={require("@images/logo-guide.png")}
					className="md:w-[103px] md:h-[103px] w-[62px] h-[62px] absolute bottom-[20px] left-[30px]"
					alt="logo"
				></Image>
			</div>
		</>
	);
}
