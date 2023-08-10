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
import { Locale, i18n } from "@/config/i18n-config";
import { getLangs } from "@/lib/get-lang";
const attrs = ["style", "embroidery", "mainCategory", "subCategory"];
const refStyles = [
    { key: "vi", title: "Phong cách" },
    { key: "en", title: "Style" },
    { key: "kr", title: "Style" },
];

const refProducts = [
    { key: "vi", title: "Sản phẩm" },
    { key: "en", title: "Item" },
    { key: "kr", title: "Item" },
];

type Props = {
    params: { slug: string; lang: string };
    searchParams: { refType: string };
};

export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const { refType } = searchParams;
    // read route params
    const { slug, lang } = params;
    const prefixTypeStyle = refStyles.filter((style) => style.key === lang)[0];
    const prefixTypeItem = refProducts.filter((item) => item.key === lang)[0];
    try {
        const data = await getDetail(slug, refType);

        const style = data?.attributes?.filter(
            (item: any) => item.attName === "mainCategory"
        )[0];
        const title = style?.title?.[lang || i18n.defaultLocale]?.toLowerCase();
        return {
            title: `${
                refType === "PRODUCT"
                    ? prefixTypeItem?.title || ""
                    : prefixTypeStyle?.title || ""
            } ${title}`,
            description: data?.description,
            openGraph: {
                siteName: "SHOWNIQ.AI",
                url: "https://showniq.ai/",
                type: "website",
                title: title || prefixTypeStyle?.title || "",
                description: data?.description || prefixTypeStyle?.title || "",
                images: [
                    {
                        url: data?.image?.[0]?.large?.url,
                        alt: `${
                            prefixTypeStyle?.title || ""
                        } ${title} | SHOWNIQ.AI`,
                    },
                ],
            },
        };
    } catch (error) {
        return {
            title: prefixTypeStyle?.title || "",
            description: prefixTypeStyle?.title || "",
        };
    }
}

export default async function DetailPage({
    params,
    searchParams,
}: {
    params: { slug: string; lang: Locale };
    searchParams: { refType: string };
}) {
    const { slug, lang } = params;
    const data = await getDetail(slug, searchParams?.refType);
    const langData = await getLangs(lang);
    if (!data || !langData) {
        return notFound();
    }
    const attributes = data?.attributes?.filter(
        (item: any) => attrs.includes(item.attName) && item.status === "A"
    );

    return (
        <div className="px-[20px] md:px-[26px]">
            <DetailPageClient data={data} lang={lang || i18n.defaultLocale} />
            <Suspense>
                {/* @ts-expect-error Server Component */}
                <Reviews id={params?.slug} />
            </Suspense>
            {attributes?.length && langData?.pages?.detail ? (
                <Tags data={attributes} lang={langData?.pages?.detail} />
            ) : null}
            <Comments id={params?.slug} />
            <Suspense>
                {/* @ts-expect-error Server Component */}
                <RelatedStyle id={params?.slug} />
            </Suspense>
            <FooterButton />
        </div>
    );
}
