import { Metadata } from "next";
import { headers } from "next/headers";
import {
    BASE_HOST,
    REF_TYPE_EVENT,
    REF_TYPE_PRODUCT,
    REF_TYPE_STYLE,
    RoutesNames,
    configs,
} from "@/config/constants";
import axiosClient from "@/lib/axiosClient";
import { getDataDetail } from "@/utils";
import SharePageSection from "@/components/SharePageSection";
import queryString from "querystring";
import { i18n } from "@/config/i18n-config";
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

export default async function SharePage({ searchParams, params }: any) {
    const locale = params?.lang || i18n.defaultLocale;
    const headersList = headers();
    const hostLang = `${BASE_HOST}/${locale}`;
    const userAgent = headersList.get("user-agent") || "";
    let { screen, _id, refType, lang } = searchParams;
    let platform = "pc";
    let urlApp = "";
    let urlDownload = `${hostLang}/download`;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        urlApp = configs.ios;
        urlDownload = configs.appStore;
        platform = "ios";
    } else if (/Android/.test(userAgent)) {
        urlApp = configs.android;
        urlDownload = configs.googlePlay;
        platform = "android";
    }

    if (Object.values(RoutesNames).indexOf(`${screen}`) === -1) {
        screen = RoutesNames.Home;
    }
    if (refType === REF_TYPE_STYLE || refType === REF_TYPE_PRODUCT) {
        screen = RoutesNames.StyleDetail;
    }
    if (refType === REF_TYPE_EVENT) {
        screen = RoutesNames.EventDetail;
    }
    const query = queryString.stringify({ screen, _id, refType });
    if (refType === REF_TYPE_STYLE || (refType === REF_TYPE_PRODUCT && !!_id)) {
        urlDownload = `${hostLang}/detail/${_id}?${queryString.stringify({
            screen,
            refType,
        })}`;
    }

    urlApp = `${urlApp}?${query}`;
    return (
        <SharePageSection
            platform={platform}
            urlApp={urlApp}
            screen={screen}
            urlDownload={urlDownload}
        />
    );
}
