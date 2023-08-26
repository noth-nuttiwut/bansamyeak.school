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


export const getFiles = async (folderId: string) => {
    try {
        const res = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return []
    }
}