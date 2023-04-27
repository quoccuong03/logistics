"use client";
import { LoadingIcon } from "@/components/icons";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <LoadingIcon className="w-12 h-12 animate-spin text-[#FFA1A1]" />
        </div>
    );
}
