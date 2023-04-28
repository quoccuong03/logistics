import { getListSimilar } from "@/lib/get-similar";
import React from "react";
import RelatedCarousel from "./RelatedCarousel";
type Props = {
    id: string;
};
export default async function RelatedStyle({ id }: Props) {
    const query = { gender: "63e0ae94144f0000ff004b97" };
    const listSimilar = await getListSimilar(id, query);
    const similarStyleStore = listSimilar?.similarStyleStore || [];
    const similarStyle = listSimilar?.similarStyle || [];
    return (
        <div className="mb-10 mt-5">
            {similarStyleStore?.length ? (
                <RelatedCarousel
                    items={similarStyleStore}
                    title={"Phong cách tương tự"}
                />
            ) : null}

            <div className="mt-5">
                <RelatedCarousel
                    items={similarStyle}
                    title={`Phong cách tương tự trên `}
                    storeName={true}
                />
            </div>
        </div>
    );
}
