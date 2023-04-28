"use client";
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Logo from "@public/images/logoShowniq.svg";
import Image from "next/image";
import Link from "next/link";
const linkConfig = "https://showniq.vn/share?refType=APP";
export default function CreateQrCode() {
	return (
		<div className="mx-auto mt-20 flex items-center  flex-col justify-center">
			<div className="relative h-[96px] w-[87px] mb-[10px]">
				<Image
					src={Logo}
					alt="img"
					loading={"lazy"}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="text-[16px] font-bold mb-[60px]">Showniq - AI Stylist Của Bạn</div>
			<div className="flex flex-col p-2 border mb-[5px] rounded justify-center  text-center">
				<QRCodeSVG value={linkConfig} style={{ margin: "auto" }} />
			</div>
			<div className="text-[14px] font-light mb-[60px]">
				Scan the QR code then you can install the app
			</div>
			<Link className="text-[14px] font-light underline" href={"/"}>
				Go to website
			</Link>
		</div>
	);
}
