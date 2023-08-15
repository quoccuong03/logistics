"use client";

import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import { ExpanIcon, CollapseIcon, ChevronDownIcon } from "@components/icons";
import TreeItem from "@mui/lab/TreeItem";
import Image from "next/image";
import { BASE_PATH_STATIC_LANDING_PAGE } from "@/config/constants";
import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Box,
} from "@mui/material";
import TypographyHTML from "../TypographyHTML";
type Props = {
    data: Array<any>;
};
export default function Info(props: Props): JSX.Element {
    const { data } = props;
    const [selected, setSelected] = useState(Array<string>);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleShow =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    function handleChange(value: string) {
        if (selected.indexOf(value) === -1) {
            selected.push(value);
            setSelected([value]);
        } else {
            setSelected(selected.filter((item) => item !== value));
        }
    }
    return (
        <Box
            sx={{
                "& .MuiAccordion-root": {
                    boxShadow: "none",
                    border: "solid 1px #EAEAEA",
                    borderRadius: 0,
                    "&::before": { display: "none" },
                    mb: { xs: 1.25, sm: 3.125 },
                    "& .MuiAccordionSummary-root": {
                        px: { xs: 1.25, sm: 3.125 },
                    },
                    "& .MuiAccordionDetails-root": {
                        px: { xs: 1.25, sm: 3.125 },
                    },
                },
            }}
        >
            {data?.map((item, index) => (
                <Accordion
                    expanded={expanded === `tab-${index}`}
                    onChange={handleShow(`tab-${index}`)}
                    key={index}
                >
                    <AccordionSummary
                        expandIcon={
                            <ChevronDownIcon
                                sx={{
                                    fontSize: 14,
                                    fill: "none",
                                    stroke: "#000",
                                    strokeWidth: 3,
                                }}
                            />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography
                            fontSize={{ xs: 10, sm: 14, fontWeight: 600 }}
                        >
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TypographyHTML
                            fontSize={{ xs: 12, sm: 14 }}
                            content={item.content.replace(/\n/g, "<br/>")}
                        />
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
                    </AccordionDetails>
                </Accordion>
            ))}
            {/*  <TreeView
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
            </TreeView> */}
        </Box>
    );
}
