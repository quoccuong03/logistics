"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@config/i18n-config";
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "../icons";
interface Props {
    locales: any[];
}
export default function LocaleSwitcher({ locales }: Props) {
    const pathName = usePathname();

    useEffect(() => {
        if (pathName) {
            const segments = pathName.split("/");
            setValue(segments[1]);
        }
    }, [pathName]);

    const [value, setValue] = useState<string>(i18n.defaultLocale);
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value as string);
    };
    return (
        <div>
            <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        fontSize: 10,
                        color: "#000",
                        borderRadius: 0,
                        lineHeight: "12px",
                        minWidth: 50,
                        "& .MuiSelect-outlined": {
                            py: 0,
                            pl: 0,
                            border: "none",
                        },
                        fieldset: { display: "none" },
                        "& .MuiSvgIcon-root": {
                            fontSize: 14,
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: 1,
                        },
                    },
                }}
                spacing={1.25}
            >
                <Image
                    src={require("@images/globe.svg")}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    alt="Locale switcher"
                />
                <Select
                    labelId="locale-select-label"
                    id="locale-select"
                    value={value}
                    size="small"
                    variant="outlined"
                    onChange={handleChange}
                    IconComponent={ChevronDownIcon}
                >
                    {locales.map((locale) => {
                        return (
                            <MenuItem
                                key={locale.value}
                                value={locale.value}
                                dense
                                sx={{
                                    "&:hover,&.Mui-selected": {
                                        bgcolor: "transparent",
                                        a: {
                                            color: "#70EAB0",
                                        },
                                    },
                                    // "&.Mui-selected": {
                                    //     bgcolor: "transparent",
                                    //     a: {
                                    //         color: "#70EAB0",
                                    //     },
                                    // },
                                }}
                            >
                                <Link href={redirectedPathName(locale.value)}>
                                    {locale.label}
                                </Link>
                            </MenuItem>
                        );
                    })}
                </Select>
            </Stack>
            {/* <p>Locale switcher:</p>
            <ul>
                {locales.map((locale) => {
                    return (
                        <li key={locale.value}>
                            <Link href={redirectedPathName(locale.value)}>
                                {locale.label}
                            </Link>
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
}
