"use client";
import { IconButton } from "@mui/material";
import React from "react";
import { BellIcon, ChevronRightIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/recoil/hooks";

const menus = [
    { name: "Home", to: "/" },
    { name: "GỢI Ý OUTFITS", to: "/suggest" },
    { name: "TÌM HIỂU THÊM", to: "/info" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { currentStore } = useStore();

    return (
        <div className="flex flex-col sticky z-50 top-0 bg-white">
            <div className="flex justify-between items-center w-full px-5">
                {pathname?.startsWith("/detail") ? (
                    <IconButton className="pl-0" onClick={() => router.back()}>
                        <ChevronRightIcon className="rotate-180 text-sm fill-black" />
                    </IconButton>
                ) : (
                    <Link href={"/"}>
                        <Image src={require("@images/logo.svg")} alt="Logo" />
                    </Link>
                )}
                {currentStore ? (
                    <div className="flex items-center">
                        <Image
                            src={currentStore?.avatar?.thumb?.url}
                            width={currentStore?.avatar?.thumb?.width}
                            height={currentStore?.avatar?.thumb?.height}
                            alt={currentStore?.name}
                            className="max-w-[20px] h-auto"
                        />
                        <h3 className="text-sm font-normal uppercase">
                            {currentStore?.name}
                        </h3>
                    </div>
                ) : null}
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
                                    ? "border-b-[3px] border-black"
                                    : ""
                            }`}
                            key={idx}
                        >
                            <Link
                                className={` ${
                                    pathname === item.to ? "text-[#000000]" : ""
                                } uppercase block pb-2 text-sm font-bold text-[#A0A0A0] active:text-[#000000] hover:text-[#000000]`}
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
