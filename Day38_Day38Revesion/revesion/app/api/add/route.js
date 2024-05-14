import { NextResponse } from "next/server";

export async function POST(request) {
    // console.log(request.body);
    let a = await request.json()
    console.log(a);
    return NextResponse.json({success : true, data : "yes"})
}
