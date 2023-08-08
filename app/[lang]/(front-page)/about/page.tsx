import { getInfo } from "@/hooks/useInfo";
import Info from "@components/info";
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
        title: res?.pages?.about?.title || "About",
        //
    };
}

export default async function AboutPage() {
    const dataInfo = await getInfo();

    return (
        <div className="global-content" style={{ paddingBottom: 100 }}>
            <Info data={dataInfo} />
        </div>
    );
}
