import { Metadata } from "next";
import { headers } from "next/headers";
import { configs } from "@/config/constants";
import axiosClient from "@/lib/axiosClient";
import { getDataDetail } from "@/utils";
import SharePageSection from "@/components/SharePageSection";

export async function generateMetadata({
    searchParams,
}: any): Promise<Metadata> {
    // read route params
    const id = searchParams?._id || "";
    const lang = searchParams?.lang || "";
    const refType = searchParams?.refType || "";
    if (!id) {
        return {
            title: "Chia sẻ SHOWNIQ AI",
        };
    }
    // fetch data
    const { data } = await axiosClient.get(
        `${configs.apiLink}${
            refType === "STYLE" ? "style" : "product"
        }/getDetail/${id}`,
        {
            headers: {
                Authorization: configs.token,
            },
        }
    );

    const detailData = getDataDetail(
        data,
        lang,
        refType,
        `${configs.window}share?_id=${id}&refType=${refType}`
    );
    return {
        ...detailData,
    };
}
export default async function SharePage() {
    const headersList = headers();
    const userAgent = headersList.get("user-agent") || "";
    let platform = "pc";
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        platform = "ios";
    } else if (/Android/.test(userAgent)) {
        platform = "android";
    }
    return <SharePageSection platform={platform} />;
}
