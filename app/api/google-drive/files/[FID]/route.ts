

import { getFiles } from "@/libs/GGDFL"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req : NextRequest){
    const FID = req.nextUrl.pathname.replace("/api/google-drive/files/", "")
    console.log("FolderID : ", FID)
    const myGGDData = await getFiles(FID ?? "")
    console.log("Files : ", myGGDData)
    return NextResponse.json(myGGDData ?? [{}])
}