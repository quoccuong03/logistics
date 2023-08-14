import CreateQrCode from "@/components/download/qrcode";
import { Locale } from "@/config/i18n-config";
import { getInfoDonwload } from "@/hooks/useInfo";
import { getLangs } from "@/lib/get-lang";
import { Metadata } from "next";

type Props = {
    params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const lang = params.lang;
    const res = await getLangs(lang);

    return {
        title: res?.pages?.download?.title || "Download",
        //
    };
}

export default async function DownloadPage({ params }: Props) {
    const lang = params.lang;
    const res = await getLangs(lang);
    const dataInfo = await getInfoDonwload();

    return (
        <CreateQrCode data={dataInfo} lang={res?.pages?.download?.content} />
    );
}
