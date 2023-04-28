import CreateQrCode from "@/components/download/qrcode";
import { getInfoDonwload } from "@/hooks/useInfo";

export default async function DownloadPage() {
	const dataInfo = await getInfoDonwload();

	return <CreateQrCode data={dataInfo} />;
}
