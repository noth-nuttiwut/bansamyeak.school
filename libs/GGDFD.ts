'use server'
import { drive } from "./googleDrive"

export const getFolders = async () => {
    
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
