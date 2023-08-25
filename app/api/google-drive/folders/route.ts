

import { getFolders } from "@/libs/googleDrive"
import { NextResponse } from "next/server"

export async function GET(){
    const myGGDData = await getFolders()
    return NextResponse.json(myGGDData)
}