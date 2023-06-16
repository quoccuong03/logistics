import DetailPageClient from "@/components/detail";
import Comments from "@/components/detail/comments";
import Reviews from "@/components/detail/reviews";
import RelatedStyle from "@/components/detail/related-style";
import Tags from "@/components/detail/tags";
import { getDetail } from "@/lib/get-detail";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import FooterButton from "@/components/detail/FooterButton";
import { Metadata } from "next";
const attrs = ["style", "embroidery", "mainCategory", "subCategory"];
type Props = {
	params: { slug: string };
	searchParams: { refType: string };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
	const { refType } = searchParams;
	// read route params
	const slug = params.slug;
	try {
		const data = await getDetail(slug, refType);

		const style = data?.attributes?.filter((item: any) => item.attName === "mainCategory")[0];
		const title = style?.title?.vi?.toLowerCase() || "Phong cách";

		return {
			title: `${refType === "PRODUCT" ? "Sản phẩm" : "Phong cách"} ${title}` || "Phong cách",
			description: data?.description || "Phong cách",
			openGraph: {
				siteName: "SHOWNIQ.AI",
				url: "https://showniq.ai/",
				type: "website",
				title: title || "Phong cách",
				description: data?.description || "Phong cách",
				images: [
					{
						url: data?.image?.[0]?.large?.url,
						alt: `Phong cách ${title} | SHOWNIQ.AI`,
					},
				],
			},
		};
	} catch (error) {
		return {
			title: "Phong cách",
			description: "Phong cách",
		};
	}
}

export default async function DetailPage({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { refType: string };
}) {
	const data = await getDetail(params?.slug, searchParams?.refType);
	if (!data) {
		return notFound();
	}
	const attributes = data?.attributes?.filter(
		(item: any) => attrs.includes(item.attName) && item.status === "A",
	);

	return (
		<div className="px-[20px] md:px-[26px]">
			<DetailPageClient data={data} />
			<Suspense>
				{/* @ts-expect-error Server Component */}
				<Reviews id={params?.slug} />
			</Suspense>
			{attributes?.length ? <Tags data={attributes} /> : null}
			<Comments id={params?.slug} />
			<Suspense>
				{/* @ts-expect-error Server Component */}
				<RelatedStyle id={params?.slug} />
			</Suspense>
			<FooterButton />
		</div>
	);
}
