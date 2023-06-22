import CreateQrCode from "@/components/download/qrcode";
import { getInfoDonwload } from "@/hooks/useInfo";
import { headers } from "next/headers";
export default async function DownloadPage() {
	const dataInfo = await getInfoDonwload();

	const userAgent = headers().get("user-agent");
	let linQr = "/download";
	if (dataInfo?.qr_link && userAgent) {
		if (/iPad|iPhone|iPod/.test(userAgent)) {
			linQr = dataInfo?.appStore;
		} else if (/Android/.test(userAgent)) {
			linQr = dataInfo?.googlePlay;
		}
	}
	return <CreateQrCode data={dataInfo} linQr={linQr} />;
}
