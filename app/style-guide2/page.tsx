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
	return <div className="styleGuid"></div>;
}
