import "keen-slider/keen-slider.min.css";
import { getRecomendationCall, getStyleCatalogCall } from "@/hooks/useSuggestion";
import Message from "@/components/suggest/message";
import Filter from "@/components/suggest/filter";
import Items from "@/components/suggest/items";

export const metadata = {
	title: "Gợi ý outfits",
};

export default async function SuggestPage() {
	const { data } = await getRecomendationCall({
		orderBy: "createdAt",
		sortedBy: "desc",
		"gender[]": "63e0ae94144f0000ff004b97",
	});

	// console.log('data', data);
	

	const { data: dataFilter } = await getStyleCatalogCall();

	return (
		<div className="global-content overflow-scroll" id="global-content">
			<Message minToday={data?.minToday} totalCount={data?.totalCount} />
			<Filter data={[...dataFilter]} lang={"VI"} gender={"WOMEN"} />
			<Items data={data?.listData || []} />
		</div>
	);
}
