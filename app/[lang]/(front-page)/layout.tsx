import { ReactNode } from "react";
import Layout from "@/components/layout";
import "@/assets/globals.css";
import "@/assets/main.scss";
import "keen-slider/keen-slider.min.css";

import { headers } from "next/headers";
import { Metadata } from "next";
import { getLangs } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";
import { BASE_PATH } from "@/config/constants";

export const metadata: Metadata = {
	title: {
		template: "demo",
		default: "demo",
	},
	description: "demo",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: {
			template: "demo",
			default: "demo",
		},
		description: "demo",
		url: "demo",
		siteName: "SHOWNIQ",
		images: [
			{
				url: "https://showniq.ai/images/og-image.png",
				width: 800,
				height: 600,
			},
		],
		locale: "vi-VN",
		type: "website",
	},
	verification: {
		other: {
			"facebook-domain-verification": "d06zgrvc6d7l93u2quk2bv4zbl6pc4",
		},
	},
};

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: { lang: Locale };
}) {
	return (
		<html lang={params.lang || "vi"}>
			<Layout>{children}</Layout>
		</html>
	);
}
