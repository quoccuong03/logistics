"use client";
import Image from "next/image";
import { CommentIcon, RotateIcon } from "@/components/icons";
import { useModal, useStore } from "@/recoil/hooks";
import EnumItem from "./EnumItem";
type Props = {
    data: any;
};
export default function EnumBlock({ data }: Props) {
    const listEmoji = data?.["review_main-emo_type"];
    const { currentStore } = useStore();
    const { onOpenModal } = useModal();
    return (
        <div>
            <div className="mb-3 flex items-center">
                <div>
                    <CommentIcon />
                </div>
                <div>
                    <span className="text-[12px] font-bold inline-flex ml-2 text-black">
                        Là bạn, bạn có muốn thử outfits này không?
                    </span>
                    <span className="text-[11px] md:text-[12px] font-light block ml-2 text-[#999999]">
                        Suy nghĩ của bạn sẽ giúp AI đề xuất phù hợp hơn đấy!
                    </span>
                </div>
            </div>
            <div className="flex items-center mb-5">
                {currentStore ? (
                    <div className="mr-1 md:mr-2">
                        <Image
                            src={require("@images/avatar.png")}
                            alt={currentStore?.name || ""}
                            width={currentStore?.avatar?.thumb?.width}
                            height={currentStore?.avatar?.thumb?.height}
                            className="h-auto max-w-[40px]"
                        />
                    </div>
                ) : null}

                {listEmoji?.length
                    ? listEmoji?.map((emoji: any, idx: number) => (
                          <EnumItem emoji={emoji} key={idx} />
                      ))
                    : null}
            </div>
            <div className="flex relative items-center">
                <textarea
                    className="w-full border-2 border-[#F2F2F2] outline-none rounded-md h-[100px] pl-2 pt-2"
                    readOnly
                    onClick={onOpenModal}
                />
                <div
                    className="flex flex-col absolute right-4 items-center"
                    onClick={onOpenModal}
                >
                    <button
                        className="rounded border border-[#999999] w-5 h-5 flex items-center justify-center mb-2"
                        onClick={onOpenModal}
                    >
                        <RotateIcon className="text-[14px] text-[#999999]" />
                    </button>
                    <button
                        className="rounded bg-[#FFA1A1] w-12 h-12 flex items-center justify-center"
                        onClick={onOpenModal}
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
}
