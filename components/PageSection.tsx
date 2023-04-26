"use client";
import { useState } from "react";
import { Box, Tabs, Tab, IconButton } from "@mui/material";
import Image from "next/image";
import TabPanel from "./TabPanel";
import { BellIcon } from "./icons";

export default function PageSection() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: 650 }}>
            <div className="flex justify-between items-center w-full">
                <Image src={require("@images/logo.svg")} alt="Logo" />
                <IconButton>
                    <BellIcon sx={{ fill: "#000" }} />
                </IconButton>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="HOME" disableRipple />
                    <Tab label="GỢI Ý OUTFITS" disableRipple />
                    <Tab label="TÌM HIỂU" disableRipple />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}
