export const metadata = {
	title: "Tìm hiểu thêm",
};
import Detail from "@/components/detail";
export default async function AboutPage(props: any) {
	return (
		<div className="relative">
			<Detail {...props} />
		</div>
	);
}
