"use client";

import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import { ExpanIcon, CollapseIcon } from "@components/icons";
import TreeItem from "@mui/lab/TreeItem";
import Image from "next/image";
import { BASE_PATH_STATIC_LANDING_PAGE } from "@/config/constants";
type Props = {
    data: Array<any>;
};
export default function Info(props: Props): JSX.Element {
    const { data } = props;
    const [selected, setSelected] = useState(Array<string>);

    function handleChange(value: string) {
        if (selected.indexOf(value) === -1) {
            selected.push(value);
            setSelected([value]);
        } else {
            setSelected(selected.filter((item) => item !== value));
        }
    }
    return (
        <>
            <TreeView
                aria-label="file system navigator"
                onNodeSelect={(e: any, value: any) => {
                    handleChange(value);
                }}
                expanded={selected}
            >
                {data?.map((item, index) => (
                    <TreeItem
                        nodeId={`${index}`}
                        key={index}
                        className="info-item pl-[25px] pr-[20px] pt-[15px] pb-[20px] mb-[18px]"
                        label={
                            <div className="flex  items-center ">
                                <h3 className="w-[100%] font-[600] text-[14px]">
                                    {item.title}
                                </h3>
                                {selected.indexOf(`${index}`) === -1 ? (
                                    <CollapseIcon className="info-icon w-[14px]" />
                                ) : (
                                    <ExpanIcon className="info-icon w-[14px]" />
                                )}
                            </div>
                        }
                    >
                        <TreeItem
                            nodeId={`${index}-child`}
                            label={
                                <>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content.replace(
                                                /\n/g,
                                                "<br/>"
                                            ),
                                        }}
                                        className=" mt-[21px]  font-medium info-item-child"
                                    ></div>
                                    <div className="items-center  flex justify-center">
                                        <div className="h-[264px] w-[197px] relative mt-[20px] mb-[20px]">
                                            <Image
                                                src={`${BASE_PATH_STATIC_LANDING_PAGE}/faq/${item.image}`}
                                                alt="img"
                                                loading={"lazy"}
                                                fill
                                                style={{
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        ></TreeItem>
                    </TreeItem>
                ))}
            </TreeView>
        </>
    );
}
