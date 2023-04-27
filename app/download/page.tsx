import CreateQrCode from "@/components/download/qrcode";
import { headers } from "next/headers";
export default function DownloadPage() {
    const headersList = headers();
    console.log("headersList", headersList);

    return <CreateQrCode />;
}
