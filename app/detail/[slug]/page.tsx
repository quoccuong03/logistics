import DetailPageClient from "@/components/detail";
import { getDetail } from "@/lib/get-detail";
import { notFound } from "next/navigation";
export default async function DetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getDetail(params?.slug);
    if (!data) {
        return notFound();
    }
    return <DetailPageClient data={data} />;
}
