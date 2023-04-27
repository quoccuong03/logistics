import { getInfo } from "@/hooks/useInfo";
import "keen-slider/keen-slider.min.css";
import Info from "@components/info";
import "./index.css";
export const metadata = {
	title: "Tìm hiểu thêm",
};

export default async function InfoPage() {
	const dataInfo = await getInfo();

	return (
		<div className="global-content">
			<Info data={dataInfo} />
		</div>
	);
}
