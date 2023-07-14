import SectionFive from "@/components/style-guide/SectionFive";

// import { Metadata } from "next";

import SectionOne from "@components/style-guide/SectionOne";
import SectionTow from "@components/style-guide/SectionTow";
import SectionThree from "@components/style-guide/SectionThree";
import SectionFour from "@components/style-guide/SectionFour";
// export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
// 	const { refType } = searchParams;
// 	// read route params
// 	const slug = params.slug;
// 	try {
// 		const data = await getDetail(slug, refType);

// 		const style = data?.attributes?.filter((item: any) => item.attName === "mainCategory")[0];
// 		const title = style?.title?.vi?.toLowerCase() || "Phong cách";

// 		return {
// 			title: `${refType === "PRODUCT" ? "Sản phẩm" : "Phong cách"} ${title}` || "Phong cách",
// 			description: data?.description || "Phong cách",
// 			openGraph: {
// 				siteName: "SHOWNIQ.AI",
// 				url: "https://showniq.ai/",
// 				type: "website",
// 				title: title || "Phong cách",
// 				description: data?.description || "Phong cách",
// 				images: [
// 					{
// 						url: data?.image?.[0]?.large?.url,
// 						alt: `Phong cách ${title} | SHOWNIQ.AI`,
// 					},
// 				],
// 			},
// 		};
// 	} catch (error) {
// 		return {
// 			title: "Phong cách",
// 			description: "Phong cách",
// 		};
// 	}
// }

export default async function StyleGuidePage({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { refType: string };
}) {
	return (
		<div className="styleGuid">
			<SectionOne title="Style Guide 2023" />
			<SectionTow bgColor="white" />
			<SectionThree />
			<SectionFour />
			<div className="mt-[15px] sm:mt-[20px]">
				<SectionOne title="" className="styleGuid__background__2" />
			</div>
			<SectionFive />
		</div>
	);
}
