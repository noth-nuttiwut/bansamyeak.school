

import { getFiles } from "@/libs/GGDFL"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req : NextRequest){
    console.log(req.nextUrl.pathname)
    const FID = req.nextUrl.pathname.replace("/api/google-drive/files/", "")
    console.log("FolderID : ", FID)
    const myGGDData = await getFiles(FID ?? "")
    return NextResponse.json(myGGDData ?? [{}])
}