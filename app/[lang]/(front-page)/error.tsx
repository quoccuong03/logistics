"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center pt-20">
            <h2>Không tìm thấy dữ liệu</h2>
            <button className="px-2 py-2 bg-slate-400 rounded">
                Quay lại trang chủ
            </button>
        </div>
    );
}
