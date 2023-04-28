import DetailPageClient from "@/components/detail";
import Comments from "@/components/detail/comments";
import Reviews from "@/components/detail/reviews";
import RelatedStyle from "@/components/detail/related-style";
import Tags from "@/components/detail/tags";
import { getDetail } from "@/lib/get-detail";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FolderHeartIcon, TalkIcon } from "@/components/icons";
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
        <div className="px-[20px] md:px-[26px] pb-20">
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
            <div className="flex items-center mb-5">
                <button className="flex items-center justify-center py-3 px-5 md:px-20 bg-[#F2F2F2] rounded">
                    <FolderHeartIcon className="mr-1" /> <span>2.1K </span>
                </button>
                <button className="flex items-center justify-center py-3 px-5 md:px-20 bg-[#FFA1A1] rounded ml-2 flex-1 flex-shrink-0">
                    <TalkIcon className="mr-1 fill-white" />{" "}
                    <span className=" text-white">Chat với shop </span>
                </button>
            </div>
        </div>
    );
}
