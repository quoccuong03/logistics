import CreateQrCode from "@/components/download/qrcode";
import { headers } from "next/headers";
import { getInfoDonwload } from "@/hooks/useInfo";

export default async function DownloadPage() {
	const headersList = headers();
	const dataInfo = await getInfoDonwload();

	return <CreateQrCode data={dataInfo} />;
}
