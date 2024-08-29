import { NextResponse } from "next/server";


export async function POST(req:Request, res: NextResponse){
    return NextResponse.json({
        success: true,
        message: "Thank you, we'll get back to you soon."
    })
}