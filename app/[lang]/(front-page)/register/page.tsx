import { getLangs } from "@/lib/get-lang";
import { Locale } from "@/config/i18n-config";
import { Metadata } from "next/types";
import { Section1 } from "@/components/register";
type Props = {
    params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const { lang } = params;
    const res = await getLangs(lang);

    return {
        title: res?.pages?.register?.title || "Register",
        //
    };
}

export default async function RegisterPage({ params }: Props) {
    const { lang } = params;
    const langData = await getLangs(lang);
    return <Section1 data={langData?.pages?.register} />;
}
