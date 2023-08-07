import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch(
        `${process.env.BASE_URL}/uploads/app/landingpage/config/master.json`
    );
    const langConfig = await res.json();
    return NextResponse.json(langConfig);
}
