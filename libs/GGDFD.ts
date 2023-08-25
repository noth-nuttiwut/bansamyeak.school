'use server'
import { google } from "googleapis"

export type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}

// authenticates the service account to be used in this context
const authFD = new google.auth.GoogleAuth({
    // your credentials to authenticate
    keyFile: "./public/ggCredential/credentialsFD.json",
    // the actions you are permissed to perform using this API, in this case
    // all CRUD operations are permissed, check out
    // [ https://developers.google.com/drive/api/guides/api-specific-auth ]
    // for more advice on scopes
    scopes: ["https://www.googleapis.com/auth/drive"],
})


export const getFolders = async () => {
    const driveFD = google.drive({
        version: "v3",
        auth: authFD,
    })
    try {
        const res = await driveFD.files.list({
            q: 'mimeType=\'application/vnd.google-apps.folder\'',
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return null
    }
}
