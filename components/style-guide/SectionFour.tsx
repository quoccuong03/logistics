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
		footerColor: "bg-green-main bottom-[-28px]",
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
		footerColorDesktop: "bg-green-main bottom-[5px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-desktop.png")}
					className=" h-[404px] w-[624px]  mt-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-desktop.png")}
					className=" h-[731px] w-[631px]  z-20 mt-[-160px]"
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
		footerColor: "bg-strawberry-main bottom-[-36px]",
		parentFooter: "mb-[70px]",
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
		footerColorDesktop: "bg-strawberry-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-two-desktop.png")}
					className=" h-[397.83px] w-[528px] mb-[140px]  mt-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-two-desktop.png")}
					className=" h-[646px] w-[777px]  z-20 mt-[-160px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "보헤미안",
		type: "BOHEMIAN",
		des: (
			<>
				<b>
					관습에 얽매이지 않고 자유로운 생활을 하는 예술가나 히피를 지칭하는 말이기도 한
					보헤미안의 의상에 현대적인 감각을 더한 스타일
				</b>
				<br />
				내추럴한 컬러/소재 아이템과 에스닉한 문양과 소재로 구분 됩니다. 매칭 <br />
				아이템으로는 샌들 쪼리 페도라 등이 있습니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위</b>- 패턴(문양) / 소재 / 악세서리
			</>
		),
		footerColor: "bg-green-main bottom-[-35px]",
		parentFooter: "mb-[70px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-three-mobile.png")}
					className=" h-[251px] w-[263px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-three-mobile.png")}
					className=" h-[302.14px] w-[340px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[-17px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-three-desktop.png")}
					className=" h-[417px] w-[398px] mb-[80px]  "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-three-desktop.png")}
					className=" h-[417px] w-[785px]  z-20 mt-[35px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "미니멀리스트",
		type: "MINIMALIST",
		des: (
			<>
				<b>미니멀리스트는 극도의 단순함을 추구하는 패션스타일 입니다</b>
				<br />
				정제된 컬러(모노톤/뉴트럴 컬러) 와 아이템 핏과 디테일의 심플함 정도로 구분됩니다.
				디자인 포인트는 지퍼, 버튼, 포켓등의 작고 다양한 디테일이 아닌 과감한 절개나 패턴,
				실루엣의 변형으로 표현 합니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 패턴(문양) / 소재 / 악세서리
			</>
		),
		footerColor: "bg-green-main bottom-[-14px]",
		parentFooter: "mb-[35px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-four-mobile.png")}
					className=" h-[248px] w-[264px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-four-mobile.png")}
					className=" h-[326px] w-[346px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[100px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-four-desktop.png")}
					className=" h-[481px] w-[451px] mb-[0px]  mt-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-four-desktop.png")}
					className=" h-[883px] w-[883px]  z-20 mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "바캉스",
		type: "VACATION",
		des: (
			<>
				<b>휴가철에 바캉스가거나 피서지 또는 리조트 등에서 입는 의상들입니다.</b>
				<br />
				주로 수영복, 비치웨어 등이며, 주로 패턴과 컬러, 매칭되는 아이템의 종류와
				상황(장소)에 따라 구분됩니다. 매칭 아이템 : 라탄 소재 가방 모자, 메쉬 소재,
				선글라스, 샌들
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 패턴(문양) / 소재 / 악세서리
			</>
		),
		footerColor: "bg-green-main bottom-[-70px]",
		parentFooter: "mb-[105px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-five-mobile.png")}
					className=" h-[280.9px] w-[324.02px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-five-mobile.png")}
					className=" h-[165px] w-[353px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-five-desktop.png")}
					className=" h-[418px] w-[482px]   mb-[100px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-five-desktop.png")}
					className=" h-[400px] w-[823px]  z-20   mb-[100px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "걸리쉬",
		type: "GIRLISH LOOK",
		des: (
			<>
				<b>엘레강스의 여성스러움 보다 소녀 적인 무드가 강한 스타일 입니다 타</b>
				<br />
				스타일과 같은 종류의 아이템이라도꽃 문양과 컬러 / 디테일(프릴,셔링등)에 영향을
				받습니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 디테일(주름,리본등) / 컬러(핑크) / 패턴 /
				아이템(블라우스, 쉬폰드레스 등)
			</>
		),
		footerColor: "bg-strawberry-main bottom-[-70px]",
		parentFooter: "mb-[105px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-six-mobile.png")}
					className=" h-[299.37px] w-[233px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-six-mobile.png")}
					className=" h-[281.01px] w-[253px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-strawberry-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-six-desktop.png")}
					className=" h-[160px] w-[589px]   mt-[100px]   mb-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-six-desktop.png")}
					className=" h-[725px] w-[598px]  z-20   mb-[40px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "섹시",
		type: "SEXY",
		des: (
			<>
				<b>여성의 인체 곡선을 드러나게 하여 성적인 매력을 강조한 옷차림. 신체를 많이</b>
				<br />
				<b>노출하였거나 몸에 꼭 맞는 의상들이 여기에 속한다</b>
				<br /> 실루엣(여성성을 드러내는 핏) 과 재단등 디자인 디테일로 구분이 됩니다 짧은
				기장과 노출정도가 가장 큰 구분점입니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 핏 /실루엣 / 소재 / 면적
			</>
		),
		footerColor: "bg-strawberry-main bottom-[-35px]",
		parentFooter: "mb-[70px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-seven-mobile.png")}
					className=" h-[230.06px] w-[300.88px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-seven-mobile.png")}
					className=" h-[286px] w-[216px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-strawberry-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-seven-desktop.png")}
					className=" h-[170px] w-[788px]   mt-[100px]   mb-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-seven-desktop.png")}
					className=" h-[725px] w-[560px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "스포티",
		type: "SPORTY",
		des: (
			<>
				<b>자연스럽고 건강해보이는 캐주얼 이미지로서 입기에도 편안하고 기능성을</b>
				<br />
				<b>중요시하여 활동적인 스포츠웨어를 말함</b>
				<br /> 메인아이템(의복 아이템)과 핏 디테일 (기능성) 매칭되는 악세서리, 상황과 장소로
				구분됩니다. 대표적으로 브랜드 (로고)의 영향을 받는 스타일입니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트: <b>1순위-</b> 아이템 /소재 / 브랜드(로고)
			</>
		),
		footerColor: "bg-green-main bottom-[-35px]",
		parentFooter: "mb-[65px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-eight-mobile.png")}
					className=" h-[286.46px] w-[310px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-eight-mobile.png")}
					className=" h-[321px] w-[339px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-eight-desktop.png")}
					className=" h-[467px] w-[500px]   mt-[30px]   mb-[40px]"
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-eight-desktop.png")}
					className=" h-[725px] w-[738px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "테크웨어",
		type: "Techwear",
		des: (
			<>
				<b>
					면 소재 캐주얼웨어가아닌, 고어텍스나 코듀라 처럼 면 소재의 한계를 극복한
					<br /> 소재로 만든 미래지향적스타일입니다
				</b>
				<br /> 디자인 포인트는 포켓, 버튼, 지퍼, 벨크로, 웨빙 테이프 입니다 더 나아가서
				워크웨어(작업복/카고팬츠)등도 하나의 줄기를 가지고 있습니다.
				<br className="hidden sm:block" />
				#베트남시장에서는밀리터리 스타일을 선호하지 않아서 밀리터리 스타일도 테크웨어로분류
				합니다
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 부자재 디테일 / 소재 / 컬러
			</>
		),
		footerColor: "bg-green-main bottom-[-35px]",
		parentFooter: "mb-[65px] mt-[-30px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-nine-mobile.png")}
					className=" h-[292.9px] w-[265px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-nine-mobile.png")}
					className=" h-[374px] w-[374px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[88px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-nine-desktop.png")}
					className=" h-[464.82px] w-[419.49px]   mt-[30px]   "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-nine-desktop.png")}
					className=" h-[895px] w-[895px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "레트로",
		type: "Retro",
		des: (
			<>
				<b>복고 패션을 현대적으로 세련되게 해석한 스타일을 말한다</b>
				<br /> 레트로 느낌이 나는 컬러 도트무늬 / 스트라이프 / 레트로 스타일 기하학적 그래픽
				패턴 하이웨이스트 로우 웨이스트 하의 / 부츠컷 올드스쿨 스타일 바람막이{" "}
				<br className="hidden sm:block" />, 체크 무늬 셔츠 , Grandma(할머니) 가디건 붉은
				립스틱/ 뱅헤어 스타일 / 스카프 연출(넥 헤어밴드)
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 1레트로 컬러 or 레트로 컬러가 사용된 패턴(상,하의
				) / 하의 핏 (부츠컷, 하이웨이스트, 로우웨이스트)
			</>
		),
		footerColor: "bg-green-main bottom-[-50px]",
		parentFooter: "mb-[80px] mt-[-30px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-ten-mobile.png")}
					className=" h-[307.2px] w-[257px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-ten-mobile.png")}
					className=" h-[286px] w-[322px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-ten-desktop.png")}
					className=" h-[443.26px] w-[370.82px]   mt-[30px]  mb-[60px]   "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-ten-desktop.png")}
					className=" h-[746px] w-[706px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "스트릿",
		type: "Street",
		des: (
			<>
				<b> 베트남시장에서는 한국의 1990~2000년대 초반처럼 힙합 스타일로 통용</b>
				<br /> <b>됩니다</b>
				<br /> 루즈하고 와이드한 아이템과 핏으로 구분됩니다 베이직 아이템과 혼동이 간다면
				자수나 나염등의 아트웍의 밀도로 가늠할 수 있습니다
				<br className="hidden sm:block" /> (프린트 아트웍은 베이직 아이템보다 눈에 띄게
				화려하거나 볼드한 경향이 있습니다 )
			</>
		),
		footer: (
			<>
				대표적 구분포인트 : <b>1순위-</b> 1레트로 컬러 or 레트로 컬러가 사용된 패턴(상,하의
				) / 하의 핏 (부츠컷, 하이웨이스트, 로우웨이스트)
			</>
		),
		footerColor: "bg-green-main bottom-[-50px]",
		parentFooter: "mb-[80px] mt-[-30px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-elevent-mobile.png")}
					className=" h-[278.87px] w-[339.17px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-elevent-mobile.png")}
					className=" h-[262px] w-[250.17px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[36px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-elevent-desktop.png")}
					className=" h-[453.26px] w-[549px]   mt-[30px]  mb-[60px]   "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-elevent-desktop.png")}
					className=" h-[800px] w-[800px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "펑크",
		type: "PUNK",
		des: (
			<>
				음악 장르에서 생겨난 스타일로 구분이 쉽습니다 아이템의 매칭과 소재, 부자재, 디테일,
				특정 문양으로 구분이 됩니다 락밴드 티셔츠,
				<br />
				체크/스트라이프패턴(블랙&화이트/레드&블랙), 레더소재 , 매쉬소재, 워커부츠 or
				하이탑스니커즈 , 금속 체인 악세서리 등
			</>
		),
		footer: <>대표적 구분포인트 : 악세서리 / 패턴(체커/타탄체크) / 밴드아트웍</>,
		footerColor: "bg-green-main bottom-[-18px]",
		parentFooter: "mb-[30px] mt-[-70px]",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-twelve-mobile.png")}
					className=" h-[364.93px] w-[289px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-twelve-mobile.png")}
					className=" h-[294.55px] w-[351px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[88px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-twelve-desktop.png")}
					className=" h-[209.26px] w-[635.13px]   mt-[60px]  mb-[60px]   "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-twelve-desktop.png")}
					className=" h-[741px] w-[883px]  z-20   mt-[-140px]"
					alt="logo"
				></Image>
			</>
		),
	},
	{
		title: "젠틀맨 / 오피스 (클래식)",
		type: "GENTLEMAN / OFFICE",
		des: (
			<>
				<b>시간이 흘러도 유행을 타지 않는, 고전적이면서 세련되고 포멀한 옷차림</b>
				<br /> 스타일 구분에서 컬러는 중요치 않습니다 아이템으 구분됩니다 매칭되는 아이템도
				중요합니다
			</>
		),
		footer: <>대표적 구분포인트 : 악세서리 / 패턴(체커/타탄체크) / 밴드아트웍</>,
		footerColor: "bg-green-main bottom-[-60px]",
		parentFooter: "mb-[100px] ",
		imageLeft: (
			<>
				<Image
					src={require("@images/guide-left-thirdteen-mobile.png")}
					className=" h-[205.83px] w-[323px]  sm:hidden"
					alt="logo"
				></Image>
			</>
		),
		imageRight: (
			<>
				<Image
					src={require("@images/guide-right-thirdteen-mobile.png")}
					className=" h-[225px] w-[335.29px]  sm:hidden z-20"
					alt="logo"
				></Image>
			</>
		),
		footerColorDesktop: "bg-green-main bottom-[0px]",
		imageLeftDesktop: (
			<>
				<Image
					src={require("@images/guide-left-thirdteen-desktop.png")}
					className=" h-[316.95px] w-[499.39px]   mt-[60px]  mb-[120px]   "
					alt="logo"
				></Image>
			</>
		),
		imageRightDesktop: (
			<>
				<Image
					src={require("@images/guide-right-thirdteen-desktop.png")}
					className=" h-[470px] w-[744px]  z-20  mt-[-60px]  "
					alt="logo"
				></Image>
			</>
		),
	},
];
export default function SectionFour(props: any): JSX.Element {
	const _renderMobileUi = (item: {
		title?: string;
		type?: string;
		des?: JSX.Element;
		footer: any;
		footerColor: any;
		parentFooter: any;
		imageLeft: any;
		imageRight: any;
	}) => {
		return (
			<>
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
			</>
		);
	};

	const _renderDesktopUi = (
		item:
			| {
					title: string;
					type: string;
					des: JSX.Element;
					footer: JSX.Element;
					footerColor: string;
					footerColorDesktop: string;
					parentFooter: string;
					imageLeft: JSX.Element;
					imageRight: JSX.Element;
					imageLeftDesktop: JSX.Element;
					imageRightDesktop: JSX.Element;
			  }
			| {
					title: string;
					type: string;
					des: JSX.Element;
					footer: JSX.Element;
					footerColor: string;
					parentFooter: string;
					imageLeft: JSX.Element;
					imageRight: JSX.Element;
					footerColorDesktop?: undefined;
					imageLeftDesktop?: undefined;
					imageRightDesktop?: undefined;
			  },
	) => {
		return (
			<div className="hidden sm:block ">
				<div className=" relative  ">
					<div className="flex justify-between px-[20px] sm:px-[30px]">
						{item?.imageLeftDesktop}
						{item?.imageRightDesktop}
					</div>
					<div
						className={`text-[15px] ${item.footerColorDesktop} absolute w-full z-10 px-[30px] py-[20px] `}
					>
						{item.footer}
					</div>
				</div>
				<div className="h-[68px]"></div>
			</div>
		);
	};
	return (
		<>
			{Data.map((item, index) => (
				<div key={index} id={`style-${index}`} className="mt-[15px] sm:mt-[20px] bg-white ">
					<div className="pt-[40px] sm:pt-[60px] px-[20px] sm:px-[30px]">
						<div className="text-[16px] sm:text-[22px] font-bold">
							{index + 1}. {item.title}
						</div>
						<div className="text-[12px] sm:text-[16px] mb-[5px] uppercase">
							{item.type}
						</div>
						<div>
							<div className="text-[11px] sm:text-[15px] mb-[30px]">{item.des}</div>
						</div>
					</div>
					{_renderDesktopUi(item)}
					{_renderMobileUi(item)}
				</div>
			))}
		</>
	);
}
