import { Metadata } from "next";
import { getLangs } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";
import { SectionOne, Section2, Section3, Section4 } from "@/components/about";

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

export default async function AboutPage({ params }: Props) {
    const { lang } = params;
    const data = await getLangs(lang);
    const pageData = data?.pages?.about?.content;
    return (
        <div className="relative">
            {pageData?.info ? (
                <SectionOne
                    title={pageData?.title}
                    desc={pageData?.desc}
                    data={pageData?.info}
                />
            ) : null}

            <Section2 title={pageData?.why} />
            <Section3 items={pageData?.reason} />
            {pageData?.chart ? <Section4 item={pageData?.chart} /> : null}
        </div>
    );
}
