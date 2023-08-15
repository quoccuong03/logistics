"use client";

import React from "react";
import Image from "next/image";
import AOS from "aos";
// import { Metadata } from "next";
import { useEffect } from "react";
import { Box } from "@mui/material";
import bg2Mb from "@images/bg-guide-mobile2.png";
import bg2 from "@images/bg-guide-desktop2.png";

export default function SectionOne(props: any): JSX.Element {
    const { title, className } = props;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Box
                className={`relative  w-100 lg:h-[506px] h-[380px]  flex justify-center items-center`}
                sx={{
                    backgroundImage: {
                        xs: `url('${bg2Mb.src}')`,
                        sm: `url('${bg2.src}')`,
                    },
                }}
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
            </Box>
        </>
    );
}
