import { getDetail } from "@/lib/get-detail";

export default async function DetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getDetail(params?.slug);
    console.log("data", data);

    return (
        <div className="mt-5">
            {params?.slug}
            {/* <PageSection /> */}
        </div>
    );
}
