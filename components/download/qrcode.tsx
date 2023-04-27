"use client";
import React from "react";
import { QRCodeSVG } from "qrcode.react";
export default function CreateQrCode() {
    return (
        <div className="mx-auto mt-5 flex items-center justify-center">
            <div className="flex flex-col mr-10 border p-2 rounded justify-center  text-center">
                <QRCodeSVG
                    value="https://play.google.com/store/apps/details?id=com.showniq"
                    style={{ margin: "auto" }}
                />
                <span className="mt-2 uppercase">CH Play</span>
            </div>
            <div className="flex flex-col justify-center border p-2 rounded text-center">
                <QRCodeSVG
                    value="https://apps.apple.com/vn/app/showniq-stylist-ai-c%E1%BB%A7a-b%E1%BA%A1n/id6445944694"
                    style={{ margin: "auto" }}
                />
                <span className="mt-2 uppercase">App store</span>
            </div>
        </div>
    );
}
