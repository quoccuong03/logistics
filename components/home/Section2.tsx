"use client";
import React from "react";
import Image from "next/image";
import bg from "@images/bg-1.png";

export default function Section2() {
    return (
        <div className="bg-[#FFD2D2] relative min-h-[800px] md:min-h-[1268px] overflow-hidden">
            <div className="pulse" />
            {/*  <div className="pulse_holder">
    <div className="pulse_marker">
        <div className="pulse_rays"></div>
    </div>
  </div> */}
            <Image
                src={bg}
                alt="bg"
                fill
                className="max-w-full md:max-w-[650px] sm:left-5"
                style={{
                    objectFit: "contain",
                    objectPosition: "bottom",
                    // maxWidth: 650,
                }}
            />
            <div className="text-center mx-7 md:mx-20 pt-[70px] md:pt-[111px] relative z-10">
                <h2 className="text-[20px] md:text-[30px] font-bold leading-6 md:leading-9 mb-3">
                    Nhận ý tưởng <br />
                    thật dễ dàng và nhanh chóng
                </h2>
                <p className="text-[16px] md:text-[22px] font-light leading-7">
                    Bạn vẫn xem KOL thời trang trên IG chứ?
                    <br /> Từ giờ, nhận đề xuất thời trang mới nhất từ AI JEESOO
                    mỗi ngày
                </p>
            </div>
            <div className="flex flex-col mt-5 md:mt-12">
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
                <div className="flex justify-between mt-[80px] md:mt-[126px] mx-[26px] items-start">
                    <Image
                        src={require("@images/m2.png")}
                        alt="Model 1"
                        className="max-w-[70px] md:max-w-[125px]"
                        style={{
                            // maxWidth: 125,
                            height: "auto",
                        }}
                    />
                    <Image
                        src={require("@images/m3.png")}
                        alt="Model 1"
                        className="max-w-[60px] md:max-w-[80px]"
                        style={{
                            // maxWidth: 80,
                            height: "auto",
                        }}
                    />
                </div>
                <div className="flex justify-between mt-[120px] md:mt-[176px] mx-[26px] relative z-20 items-center">
                    <Image
                        src={require("@images/m4.png")}
                        alt="Model 1"
                        className="max-w-[50px] md:max-w-[65px]"
                        style={{
                            // maxWidth: 65,
                            height: "auto",
                        }}
                    />
                    <Image
                        src={require("@images/m5.png")}
                        alt="Model 1"
                        className="max-w-[50px] md:max-w-[76px]"
                        style={{
                            // maxWidth: 76,
                            height: "auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
