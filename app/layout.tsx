import Layout from "@/components/layout";
import "./globals.css";
import "./main.scss";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getInfoDonwload } from "@/hooks/useInfo";
import { headers } from "next/headers";

export const metadata = {
	title: {
		template: "%s | Showniq",
		default: "Home",
	},
	description: "App Showniq",
	icons: {
		icon: "/favicon.png",
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const dataJson = await getInfoDonwload();

	const userAgent = headers().get("user-agent");
	let linQr = "/download";
	if (dataJson?.qr_link && userAgent) {
		if (/iPad|iPhone|iPod/.test(userAgent)) {
			linQr = dataJson?.qr_link;
		} else if (/Android/.test(userAgent)) {
			linQr = dataJson?.qr_link;
		}
	}

	return (
		<html lang="en">
			<Layout linQr={linQr}>{children}</Layout>
		</html>
	);
}
