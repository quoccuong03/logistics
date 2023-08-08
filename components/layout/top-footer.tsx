"use client";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
interface Props {
    lang: any;
}
export default function TopFooter({ lang }: Props) {
    return (
        <div className="px-[20px] md:px-[26px] pb-20 pt-5 bg-[#FCFCFC]">
            <Image
                src={require("@images/logo-2.svg")}
                alt="Shownig"
                className="mt-2"
            />
            <Typography
                component={"h3"}
                fontSize={12}
                fontWeight={700}
                color={"#797979"}
            >
                {lang?.company?.name}
            </Typography>
            <Typography fontSize={12} fontWeight={500} color={"#797979"}>
                {lang?.footer?.address?.label}: {lang?.footer?.address?.desc}
                <br />
                Website: www.showniq.ai <br />
                Email: contact@showniq.ai <br />
                {lang?.footer?.phone?.label}: 028 3535 3470 <br />
                {lang?.footer?.tax?.label}: {lang?.footer?.tax?.desc}
            </Typography>
            <div className="flex space-x-2 mt-5">
                <Link
                    href={"https://www.instagram.com/showniq/"}
                    target="_blank"
                >
                    <Image
                        src={require("@images/instagram.svg")}
                        alt="Instagram"
                    />
                </Link>
                <Link
                    href={"https://www.facebook.com/showniqvietnam"}
                    target="_blank"
                >
                    <Image
                        src={require("@images/facebook.svg")}
                        alt="Facebook"
                    />
                </Link>
            </div>
        </div>
    );
}
