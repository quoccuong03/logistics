import Image from "next/image";
import React from "react";
type Props = {
    data: any[];
};
export default function Tags({ data }: Props) {
    return (
        <div className="mb-3 mt-11">
            <h3 className="text-[12px] font-medium text-black mb-3">
                Thẻ liên quan
            </h3>
            <div className="flex whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {data.map((item: any, idx: number) => (
                    <div
                        className="flex items-center bg-[#FAFAFA] mr-2 w-[102px] shrink-0 px-4 py-2 rounded-sm"
                        key={idx}
                    >
                        {item?.image && (
                            <Image
                                src={item?.image}
                                alt={item.title.vi}
                                className="w-4 rounded-full mr-2"
                                width={16}
                                height={16}
                            />
                        )}
                        <span className="inline-flex text-[#999999] text-xs">
                            {item.title.vi}
                        </span>
                    </div>
                ))}
            </div>
            <h5 className="text-[9px] font-medium text-[#999999] mb-3 mt-7">
                Ấn vào thẻ liên quan để xem thêm các outfits tương tự
            </h5>
        </div>
    );
}
