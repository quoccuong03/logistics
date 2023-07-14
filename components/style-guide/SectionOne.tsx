"use client";

import React, { useState } from "react";
import Image from "next/image";
import AOS from "aos";
// import { Metadata } from "next";
import { useEffect } from "react";
export default function SectionOne(props: any): JSX.Element {
	const { title, className } = props;
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div
				className={`relative  w-100 lg:h-[506px] h-[380px] styleGuid__background flex justify-center items-center ${className}`}
			>
				<div
					data-aos="fade-down"
					className="text-[34.58px] font-bold lg:text-[54.26px] text-[#fff] uppercase "
				>
					{title}
				</div>
				<Image
					data-aos="zoom-in"
					src={require("@images/logo-guide.png")}
					className="lg:w-[103px] lg:h-[103px] w-[62px] h-[62px] absolute bottom-[20px] left-[30px]"
					alt="logo"
				></Image>
			</div>
		</>
	);
}
