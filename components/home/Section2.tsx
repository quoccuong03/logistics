"use client";
import React from "react";
import Image from "next/image";
import bg from "@images/bg-1.png";

export default function Section2() {
    return (
        <div className="bg-[#FFD2D2] relative min-h-[1268px]">
            <Image
                src={bg}
                alt="bg"
                fill
                style={{
                    objectFit: "contain",
                    objectPosition: "bottom",
                    maxWidth: 650,
                }}
            />
            <div className="text-center mx-20 pt-[111px] relative z-10">
                <h2 className="text-[30px] font-bold leading-9 mb-3">
                    Nhận ý tưởng <br />
                    thật dễ dàng và nhanh chóng
                </h2>
                <p className="text-[20px] font-light leading-6">
                    Bạn vẫn xem KOL thời trang trên IG chứ?
                    <br /> Từ giờ, nhận đề xuất thời trang mới nhất từ AIJEESOO
                    mỗi ngày
                </p>
            </div>
            <div className="flex flex-col mt-12">
                <div className="text-center">
                    <Image
                        src={require("@images/m1.png")}
                        alt="Model 1"
                        className="mx-auto"
                        style={{
                            maxWidth: 73,
                            height: "auto",
                        }}
                    />
                </div>
                <div className="flex justify-between mt-[126px] mx-[26px] items-start">
                    <Image
                        src={require("@images/m2.png")}
                        alt="Model 1"
                        style={{
                            maxWidth: 125,
                            height: "auto",
                        }}
                    />
                    <Image
                        src={require("@images/m3.png")}
                        alt="Model 1"
                        style={{
                            maxWidth: 80,
                            height: "auto",
                        }}
                    />
                </div>
                <div className="flex justify-between mt-[176px] mx-[26px]">
                    <Image
                        src={require("@images/m4.png")}
                        alt="Model 1"
                        style={{
                            maxWidth: 65,
                            height: "auto",
                        }}
                    />
                    <Image
                        src={require("@images/m5.png")}
                        alt="Model 1"
                        style={{
                            maxWidth: 76,
                            height: "auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
