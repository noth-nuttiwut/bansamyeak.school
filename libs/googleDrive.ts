import { getFolders, getFoldersInFolders, getFiles, getSpreadSheetData } from "./utils"
export type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}
export type urlFromType =  {
    PdfUrls : GGResponeType[] | undefined,
    ImageUrls : GGResponeType[] | undefined
}

type SpreadSheetData = {
    name: string
    url: string
}

export const getUrlsFrom = async (folderName: string, reverse : boolean = false) => {
    const allFilesandFolders: any = await getFolders()
    if (allFilesandFolders) {
        const folderID: GGResponeType[] = allFilesandFolders?.filter((f: GGResponeType) => f.name.startsWith(folderName))
        
        // const FolderResp = await
        const Urls: any = await getFiles(folderID[0]?.id)
        if (Urls) {
            const ImageUrls: GGResponeType[] = Urls?.filter(( i: GGResponeType) => i?.mimeType?.startsWith("image/")).sort((a : GGResponeType, b: GGResponeType) => a.name.localeCompare(b.name, undefined, { numeric: true }), )
            const PdfUrls: GGResponeType[] = Urls?.filter(( i: GGResponeType) => i?.mimeType?.startsWith("application/")).sort((a : GGResponeType, b: GGResponeType) => a.name.localeCompare(b.name, undefined, { numeric: true }))
            return {
                PdfUrls: reverse ? PdfUrls.reverse() : PdfUrls,
                ImageUrls : reverse ? ImageUrls.reverse(): ImageUrls,
            } 

        }
        return {
            PdfUrls : [],
            ImageUrls: []
        }

    }
    return {
        PdfUrls : [],
        ImageUrls: []
    }
}

export const getFolderByName = async (folderName: string) => {
    const allFilesandFolders: any = await getFolders()
    if (allFilesandFolders) {
        const folderID: GGResponeType[] = allFilesandFolders?.filter((f: GGResponeType) => f.name.startsWith(folderName))
        const allFolders = await getFoldersInFolders(folderID[0]?.id)
        return allFolders ?? []
    }
    return []
    
}

export const getVideoUrlFromSpreadSheet = async (folderName: string) => {
    const allFilesandFolders: any = await getFolders()
    if (allFilesandFolders) {
        const folderID: GGResponeType[] = allFilesandFolders?.filter((f: GGResponeType) => f.name.startsWith(folderName))
        const files: any = await getFiles(folderID[0]?.id)
        const ssFile = files?.filter((f: GGResponeType) => f.name.startsWith("URL") && f.mimeType?.startsWith("application/vnd.google-apps.spreadsheet"))
        const urls = await getSpreadSheetData(ssFile[0]?.id)
        return urls
    }
    return []
    
}

