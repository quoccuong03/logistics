"use client";
import { IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import { BellIcon } from "../icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menus = [
    { name: "Home", to: "/" },
    { name: "GỢI Ý OUTFITS", to: "/suggest" },
    { name: "TÌM HIỂU THÊM", to: "/info" },
];
export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col sticky z-50 top-0 bg-white">
            <div className="flex justify-between items-center w-full px-5">
                <Link href={"/"}>
                    <Image src={require("@images/logo.svg")} alt="Logo" />
                </Link>
                <IconButton>
                    <BellIcon sx={{ fill: "#000" }} />
                </IconButton>
            </div>
            <nav className="border-b-[1px] border-[#F5F5F5]">
                <ul className="flex items-center">
                    {menus.map((item: any, idx: number) => (
                        <li
                            className={`px-5 ${
                                pathname === item.to
                                    ? "border-b-2 border-black"
                                    : ""
                            }`}
                            key={idx}
                        >
                            <Link
                                className={`uppercase block pb-2 text-sm font-bold text-[#A0A0A0] active:text-[#000] ${
                                    pathname === item.to ? "text-[#000]" : ""
                                }`}
                                href={item.to}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
