import { NextResponse } from "next/server";
import { promises as fs } from "fs";
export async function GET(request: Request) {
    console.log("request", request);

    const fileContents = await fs.readFile(
        `${process.env.BASE_URL}/uploads/app/landingpage/config/master.json`,
        "utf8"
    );
    // const res = await fetch(
    //     `${process.env.BASE_URL}/uploads/app/landingpage/config/master.json`
    // );
    // const langConfig = await res.json();

    return NextResponse.json(fileContents);
}
