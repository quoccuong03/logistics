// export const metadata = {
// 	title: "Tìm hiểu thêm",
// };
import { SectionOne } from "@/components/about";
export default async function AboutPage(props: any) {
	return (
		<div className="relative">
			<SectionOne {...props} />
		</div>
	);
}
