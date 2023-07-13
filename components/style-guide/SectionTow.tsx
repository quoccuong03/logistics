"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function SectionTow(props: any): JSX.Element {
	const { bgColor } = props;
	return (
		<div className={`bg-${bgColor} p-[20px] sm:p-[30px]`}>
			<Image
				src={require("@images/logo-small-guide.png")}
				className="sm:w-[95.45px] sm:h-[21px] w-[81.82px] h-[18px] mb-[20px] sm:mb-[30px]"
				alt="logo"
			></Image>
			<div className="text-[10px] sm:text-[14px]">
				<div>
					<b>
						스타일을 구분할 때 컬러, 문양, 옷의 형태도 참고를 할수는 있지만 이는 아주
						작은 부분입니다. 일부 스타일을 제외하고 컬러로 전반적인 스타일을
						구분하기에는, 트랜드에 따라서나 시즌별로 유기적으로 이동합니다.
					</b>
					(1990년도의 베이직스타일에 보편적으로 쓰이던 컬러가 2000년도 이후에 들어서
					스트릿 스타일 컬러로 통용이 늘어나기도 합니다)
				</div>
				<br />
				<div>
					<b>
						따라서 스타일 구분을 할때는 전체적인 밸런스를 판단해서 구분하는 것이 가장
						중요합니다.
					</b>
					<br />
					<b>밸런스 구분을 할때 참조할 요소들은</b>
					<br />
					<b> 컬러, 핏(기장,품)</b>
					<br />
					<b>.아이템, 상황</b> <br /> (장소, 배경- 해변/수영장, 리조트, 헬스장, 도심,
					거실, 야외, 등산, 자전거 서류가방, 여행가방 등)
					<br /> <b>.각 아이템의 착용방식</b>
					<br /> (착용 위치, 사이즈, 매는, 쓰는, 걸치는,소매 밑단등을 걷는, 단추나 지퍼
					타이등를 푸는)
					<br /> <b>.상의, 하의, 아우터의사이즈를 연출 한 방식 등입니다</b> (사이즈를 크게
					또는 작게 )
				</div>
				<br />
				<div className="mb-[20px] sm:mb-[30px]">
					<b>그럼에도불구하고컬러나 패턴으로구분 지을수 있는 스타일도일부 있습니다</b>
				</div>
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
