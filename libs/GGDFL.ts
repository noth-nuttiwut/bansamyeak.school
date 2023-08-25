'use server'
import { drive } from "./googleDrive"


export const getFiles = async (folderId: string) => {
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