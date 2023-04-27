import DetailPageClient from "@/components/detail";
import Comments from "@/components/detail/comments";
import Reviews from "@/components/detail/reviews";
import RelatedStyle from "@/components/detail/related-style";
import Tags from "@/components/detail/tags";
import { getDetail } from "@/lib/get-detail";
import { notFound } from "next/navigation";
import { Suspense } from "react";
const attrs = ["style", "embroidery", "mainCategory", "subCategory"];
export default async function DetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getDetail(params?.slug);
    if (!data) {
        return notFound();
    }
    const attributes = data?.attributes?.filter(
        (item: any) => attrs.includes(item.attName) && item.status === "A"
    );

    return (
        <div className="px-[26px] mb-5">
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
        </div>
    );
}
