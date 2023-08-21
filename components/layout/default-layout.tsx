"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	return (
		<>
			<div
				className={`max-w-[1336px] mx-auto  relative ${
					pathname === "/" ? "bg-[#FDF5E7]" : ""
				}`}
				id="layout"
			>
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</div>
		</>
	);
}
