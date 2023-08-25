'use server'
import { google } from "googleapis"

export type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
    // your credentials to authenticate
    keyFile: process.env.CREDENTIAL_PATH,
    // the actions you are permissed to perform using this API, in this case
    // all CRUD operations are permissed, check out
    // [ https://developers.google.com/drive/api/guides/api-specific-auth ]
    // for more advice on scopes
    scopes: ["https://www.googleapis.com/auth/drive"],
})

export const getFolders = async () => {
    // allows you to use drive API methods e.g. listing files, creating files.
    const drive = google.drive({
        version: "v3",
        auth: auth,
    })

    try {
        const res = await drive.files.list({
            q: 'mimeType=\'application/vnd.google-apps.folder\'',
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return null
    }
}

export const getFiles = async (folderId: string) => {
    // allows you to use drive API methods e.g. listing files, creating files.
    const drive = google.drive({
        version: "v3",
        auth: auth,
    })

    try {
        const res = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return null
    }
}


export const getUrlsFrom = async (folderName : string) => {
    const ggUrl = `${process.env.DOMAIN_NAME}/api/google-drive`
    const FolderResp = await fetch(ggUrl+"/folders")
    const allFilesandFolders: GGResponeType[] = await FolderResp.json()
    const folderID: GGResponeType[] = allFilesandFolders.filter(f => f.name == folderName)

    const filesResp = await fetch(ggUrl+"/files?FID=" + folderID[0]?.id)
    const Urls: GGResponeType[] = await filesResp.json()
    const ImageUrls: GGResponeType[] = Urls?.filter(i => i.mimeType.startsWith("image/"))
    const PdfUrls: GGResponeType[] = Urls?.filter(i => i.mimeType.startsWith("application/"))
    return {
        PdfUrls,
        ImageUrls
    }
}

