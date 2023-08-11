import { Section1 } from "@/components/seller";
import { Locale } from "@/config/i18n-config";
import { getLangs } from "@/lib/get-lang";
import { Metadata } from "next/types";
type Props = {
    lang: Locale;
    slug: string;
};
export async function generateMetadata({
    params,
}: {
    params: Props;
}): Promise<Metadata> {
    // read route params
    const { lang } = params;
    const res = await getLangs(lang);
    return {
        title: res?.pages?.seller?.title || "Seller",
        //
    };
}

export default async function SellerPage({ params }: { params: Props }) {
    const { lang } = params;
    const langData = await getLangs(lang);

    return (
        <div className="bg-[#FCF5E6] pt-[25px] min-h-screen">
            {langData?.pages?.seller ? (
                <Section1 data={langData?.pages?.seller} />
            ) : null}
        </div>
    );
}
