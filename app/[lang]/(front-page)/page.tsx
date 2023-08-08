"use client";

import CardList from "@/components/home/CardList";
import Carousel from "@/components/home/Carousel";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import VideoInfo from "@/components/home/VideoInfo";
import { useFetchStyleList } from "@/hooks/useSuggestion";

export default function HomePage() {
    const query = {
        status: "A",
        sortedBy: "desc",
        orderBy: "random",
        page: 1,
        limit: 30,
        "gender[]": "63e0ae94144f0000ff004b97",
        cache: "1_h",
    };
    const queryKey = ["listStyle", query];
    const { data } = useFetchStyleList(queryKey, queryKey[1]);
    // @ts-ignore
    const listData = data?.listData || [];
    const odtList = listData.length ? listData.slice(0, 10) : undefined;

    return (
        <div>
            <VideoInfo />
            {odtList ? <CardList items={odtList} /> : null}

            <Carousel />
            <Section2 />
            <Section3 />
        </div>
    );
}
