"use server"
import { google } from "googleapis"

type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
    // your credentials to authenticate
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    // the actions you are permissed to perform using this API, in this case
    // all CRUD operations are permissed, check out
    // [ https://developers.google.com/drive/api/guides/api-specific-auth ]
    // for more advice on scopes
    scopes: ["https://www.googleapis.com/auth/drive"],
})

const drive = google.drive({
    version: "v3",
    auth: auth,
})

export const getUrlsFrom = async (folderName: string) => {
    const ggUrl = `${process.env.DOMAIN_NAME}/api/google-drive`
    const FolderResp = await fetch(ggUrl + "/folders")
    const allFilesandFolders: GGResponeType[] = await FolderResp.json()
    const folderID: GGResponeType[] = allFilesandFolders.filter(f => f.name == folderName)

    const filesResp = await fetch(ggUrl + "/files/" + folderID[0]?.id)
    const Urls: GGResponeType[] = await filesResp.json()
    const ImageUrls: GGResponeType[] = Urls?.filter(i => i?.mimeType?.startsWith("image/"))
    const PdfUrls: GGResponeType[] = Urls?.filter(i => i?.mimeType?.startsWith("application/"))
    return {
        PdfUrls,
        ImageUrls
    }
}