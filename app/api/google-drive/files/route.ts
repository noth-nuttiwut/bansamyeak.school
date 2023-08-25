

import { getFiles } from "@/libs/GGDFL"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req : NextRequest){
    const myGGDData = await getFiles(req.nextUrl.searchParams.get("FID") ?? "")
    return NextResponse.json(myGGDData ?? [{}])
}