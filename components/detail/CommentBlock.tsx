"use client";
import Image from "next/image";
import { LikeIcon } from "@/components/icons";
import { Pagination } from "@mui/material";
import Slider from "./Slider";
import { useModal } from "@/hooks";
type Props = {
    data: any[];
    lang: any;
};
export default function CommentBlock({ data, lang }: Props) {
    const { onShow } = useModal();
    return (
        <div className="pb-3 mt-5 relative">
            <div className="absolute flex backdrop-filter backdrop-blur-sm h-full bg left-[-26px] right-[-26px] z-[999] top-0 justify-center items-center bg-white bg-opacity-30">
                <button onClick={onShow}>
                    <Image
                        src={require("@images/eye-off.svg")}
                        alt="Eye off"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </button>
            </div>
            <h3 className="text-xs font-medium mb-3">
                <span className="text-[var(--pink)]">5</span> {lang?.post}
            </h3>
            <div className="flex justify-between bg-[#FAFAFA] py-3 rounded">
                <div className="w-[50%] md:w-52 flex items-center flex-col border-r-2 border-gray-300 min-h-[100px] justify-center">
                    <Image
                        src={
                            "https://static.showniq.ai/public/app/general/emotion/emo-wm-5.png"
                        }
                        alt={""}
                        width={30}
                        height={30}
                    />
                    <span className="text-[#8C8C8C] text-sm">
                        <b className="text-black text-lg font-medium">5</b>/5
                    </span>
                </div>
                <div className="flex justify-center flex-1">
                    <Slider
                        data={{ percent: 45, label: "10's", rate: "3.0" }}
                        className="h-14 mr-5"
                    />
                    <Slider
                        data={{ percent: 100, label: "20's", rate: "3.5" }}
                        className="h-14 mr-5"
                    />
                    <Slider
                        data={{ percent: 25, label: "30's", rate: "2.5" }}
                        className="h-14"
                    />
                </div>
            </div>
            <ul className="flex flex-col">
                {data.map((item: any, idx: number) => (
                    <li
                        className={
                            "flex justify-between my-5 border-b border-b-neutral-200 pb-3 min-h-[100px] items-stretch"
                        }
                        key={idx}
                    >
                        <div className="flex items-start">
                            <Image
                                src={require(`@images/${item.author.avatar}`)}
                                alt={item.author.name}
                                width={30}
                                height={30}
                            />
                            <div className="ml-2">
                                <h3 className="text-xs font-medium">
                                    {item.author.name}
                                </h3>
                                <h5 className="text-xs font-normal text-[#999999]">
                                    {item.date}
                                </h5>
                                <div className="text-xs font-normal text-[#999999]">
                                    {item.desc}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between">
                            <button onClick={onShow}>
                                <Image
                                    src={item.emoji}
                                    alt={item.author.name}
                                    width={20}
                                    height={20}
                                />
                            </button>

                            <button
                                className="flex items-center"
                                onClick={onShow}
                            >
                                <LikeIcon className="text-sm text-[#999999]" />
                                <span className="inline-flex ml-1 text-sm text-[#999999]">
                                    {item.likeCnt}
                                </span>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex items-center ">
                <Pagination
                    className="pagination-showniq mx-auto mt-9"
                    count={5}
                    variant="outlined"
                    shape="rounded"
                    onChange={onShow}
                />
            </div>
        </div>
    );
}
