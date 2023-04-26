import "keen-slider/keen-slider.min.css";
import { getRecomendationCall } from "@hooks/useRecomendation";
import Message from "@components/Message";
import Filter from "@components/Filter";
import "./index.css";
export const metadata = {
	title: "Gợi ý outfits",
};

export default async function SuggestPage() {
	const { data } = await getRecomendationCall({
		orderBy: "createdAt",
		sortedBy: "desc",
		"gender[]": "63e0ae94144f0000ff004b97",
	});

	return (
		<div className="mt-5 suggest">
			<Message minToday={data?.minToday} totalCount={data?.totalCount} />
			<Filter {...data} />
		</div>
	);
}
