import { getInfo } from "@/hooks/useInfo";
import "keen-slider/keen-slider.min.css";
import Info from "@components/info";
import "./index.css";
import { Metadata } from "next";
import { getLangs } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";
// export const metadata = {
// 	title: "Tìm hiểu thêm",
// };
type Props = {
    params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const lang = params.lang;
    const res = await getLangs(lang);

    return {
        title: res?.pages?.info?.title || "Info",
        //
    };
}

export default async function InfoPage({ params }: Props) {
    const lang = params.lang;
    const res = await getLangs(lang);

    return (
        <div className="global-content" style={{ paddingBottom: 100 }}>
            <Info data={res?.pages?.info?.faq} />
        </div>
    );
}
