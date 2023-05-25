"use client";
import Image from "next/image";
import Typography from "@mui/material/Typography";
export default function TopFooter() {
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
                CÔNG TY CỔ PHẦN SHOWNIQ
            </Typography>
            <Typography fontSize={12} fontWeight={500} color={"#797979"}>
                Địa chỉ trụ sở chính: 95-86-87 Bến Văn Đồn, Phường 9, quận 4,
                TP.HCM <br />
                Website: www.showniq.ai <br />
                Email: contact@showniq.ai <br />
                Điện thoại: 028 3535 3470 <br />
                MST: 0317560730 do Sở KH & ĐT TP.HCM cấp lần đầu ngày 10/11/2022
            </Typography>
            <div className="flex space-x-2 mt-5">
                <Image src={require("@images/instagram.svg")} alt="Instagram" />
                <Image src={require("@images/facebook.svg")} alt="Facebook" />
            </div>
        </div>
    );
}
