"use client";
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

type Props = {
	data: {
		title?: string;
		logo: string;
		description?: string;
		qr_link: string;
		redirect?: {
			title?: string;
			url?: string;
		};
	};
};
export default function CreateQrCode(props: Props) {
	const { data } = props;

	return (
		<div className="mx-auto mt-20 flex items-center  flex-col justify-center">
			<div className="relative h-[96px] w-[87px] mb-[10px]">
				<Image
					src={data.logo}
					alt="img"
					loading={"lazy"}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="text-[16px] font-bold mb-[60px]">{data?.title}</div>
			<div className="flex flex-col p-2 border mb-[10px] rounded justify-center  text-center">
				<QRCodeSVG
					value={`http://192.168.1.3:3000/share?refType=APP`}
					style={{ margin: "auto" }}
				/>
			</div>
			<div className="text-[14px] font-light mb-[60px]">{data.description}</div>
			<a className="text-[14px] font-light underline" href={data?.redirect?.url}>
				{data?.redirect?.title}
			</a>
		</div>
	);
}
