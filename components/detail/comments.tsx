import { getEnums } from "@/lib/get-enum";
import { getListSimilar } from "@/lib/get-similar";
import React from "react";
import EnumBlock from "./EnumBlock";
import CommentBlock from "./CommentBlock";
type Props = {
    id: string;
};
function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
    {
        author: {
            name: "Thiên ân",
            avatar: require("@images/c1.png"),
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-5.png",
        likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Bảo anh",
            avatar: require("@images/c2.png"),
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-4.png",
        likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Lê Tùng",
            avatar: require("@images/c3.png"),
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-3.png",
        likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Dương nguyễn",
            avatar: require("@images/c4.png"),
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-2.png",
        likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Quốc bảo",
            avatar: require("@images/c1.png"),
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-1.png",
        likeCnt: randomNumberInRange(100, 900),
    },
];
export default function Comments({ id }: Props) {
    // const params = ["review_main-emo_type"];
    // const listEnums = await getEnums(params);
    // const query = { gender: "63e0ae94144f0000ff004b97" };
    // const listSimilar = await getListSimilar(id, query);

    return (
        <div>
            <CommentBlock data={data} />
        </div>
    );
}
