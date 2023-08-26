

import { getFiles } from "@/libs/GGDFL"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req : NextRequest){
    const FID = req.nextUrl.pathname.replace("/api/google-drive/files/", "")
    const myGGDData = await getFiles(FID ?? "")
    return NextResponse.json(myGGDData ?? [{}])
}