"use client";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import TopFooter from "./top-footer";
export default function DefaultLayout({ children, linQr }: { children: ReactNode; linQr: string }) {
	const pathname = usePathname();
	return (
		<>
			<div
				className={`max-w-[650px] mx-auto border-2 relative ${
					pathname === "/" ? "bg-[#FDF5E7]" : ""
				}`}
				id="layout"
			>
				<Navbar />
				<main className="min-h-screen">
					{children}
					<TopFooter />
				</main>
				<Footer linQr={linQr} />
			</div>
		</>
	);
}
