import React from "react";
import CommentBlock from "./CommentBlock";
type Props = {
    id: string;
    lang: any;
};
function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
    {
        author: {
            name: "Thiên ân",
            avatar: "c1.png",
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-5.png",
        likeCnt: 425,
        // likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Bảo anh",
            avatar: "c2.png",
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-4.png",
        likeCnt: 170,
        // likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Lê Tùng",
            avatar: "c3.png",
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-3.png",
        likeCnt: 535,
        // likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Dương nguyễn",
            avatar: "c4.png",
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-2.png",
        likeCnt: 352,
        // likeCnt: randomNumberInRange(100, 900),
    },
    {
        author: {
            name: "Quốc bảo",
            avatar: "c1.png",
        },
        date: "13.0.2022",
        desc: " Mình rất là thích phong này sẽ kiếm nó để mua^^",
        emoji: "https://static.showniq.ai/public/app/general/emotion/emo-wm-1.png",
        likeCnt: 240,
        // likeCnt: randomNumberInRange(100, 900),
    },
];
export default function Comments({ id, lang }: Props) {
    // const params = ["review_main-emo_type"];
    // const listEnums = await getEnums(params);
    // const query = { gender: "63e0ae94144f0000ff004b97" };
    // const listSimilar = await getListSimilar(id, query);

    return (
        <div>
            <CommentBlock data={data} lang={lang} />
        </div>
    );
}
