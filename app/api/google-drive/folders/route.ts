

import { getFolders } from "@/libs/GGDFD"
import { NextResponse } from "next/server"

export async function GET(){
    const myGGDData = await getFolders()
    console.log("Files : ", myGGDData)
    return NextResponse.json(myGGDData ?? [{}] )
}