"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@config/i18n-config";
import { Select, MenuItem, Stack, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@/components/icons";
import { BASE_PATH } from "@/config/constants";
interface Props {
    locales: any[];
}

export default function LocaleSwitcher({ locales }: Props) {
    const pathName = usePathname();
    useEffect(() => {
        if (pathName) {
            const segments = pathName.split("/");
            let lang: string = i18n.defaultLocale;
            if (BASE_PATH) {
                lang = segments[2];
            } else {
                lang = segments[1];
            }
            setValue(lang);
        }
    }, [pathName]);

    const [value, setValue] = useState<string>(i18n.defaultLocale);
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        if (BASE_PATH) {
            segments[2] = locale;
        } else {
            segments[1] = locale;
        }
        return segments.join("/").replace(BASE_PATH || "", "");
    };
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value as string);
    };
    return (
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
    );
}
