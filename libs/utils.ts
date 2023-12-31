import { google } from "googleapis"
import { cache } from "react"

export const revalidate = 300

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
    scopes: ["https://www.googleapis.com/auth/drive", 'https://www.googleapis.com/auth/spreadsheets'],
})

const drive = google.drive({
    version: "v3",
    auth: auth,
})
const service = google.sheets({version: 'v4', auth});


export const getFiles = cache(async (folderId: string) => {
    try {
        const res = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
            orderBy: "name"
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return []
    }
})

export const getFolders = cache(async () => {
    
    try {
        const res = await drive.files.list({
            q: "mimeType=\'application/vnd.google-apps.folder\'",
            orderBy: "name",
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return []
    }
})

export const getFoldersInFolders = cache(async (folderId : string) => {
    
    try {
        const res = await drive.files.list({
            q: `'${folderId}' in parents and mimeType=\'application/vnd.google-apps.folder\'`,
            orderBy: "name"
        })
        const files = res.data.files
        return files
    } catch (error: any) {
        console.error("Error fetching files:", error.message)
        return []
    }
})

export const getSpreadSheetData = cache(async (spreadsheetId : string) => {
    try {
        const result: any = await service.spreadsheets.values.get({
            spreadsheetId,
            range: 'A1:B100',
        });

        const jsonData : any = [];
        result.data.values.forEach((element : any) => {
            jsonData.push({
                name : element[0],
                url : element[1]
            })
        });
        return jsonData;
        
      } catch (err) {

        return []
      }
})

