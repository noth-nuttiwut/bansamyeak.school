import { getFiles } from "./GGDFL"
import { getFolders } from "./GGDFD"
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

export const getUrlsFrom = async (folderName: string) => {
    // const ggUrl = `${process.env.DOMAIN_NAME}/api/google-drive`
    // const FolderResp = await fetch(ggUrl + "/folders", { next: { revalidate : 15*60 }})
    const allFilesandFolders: any = await getFolders()
    if (allFilesandFolders) {
        const folderID: GGResponeType[] = allFilesandFolders?.filter((f: GGResponeType) => f.name == folderName)
        // const filesResp = await fetch(ggUrl + "/files/" + folderID[0]?.id, { next: { revalidate: 600 } })

        // const FolderResp = await
        const Urls: any = await getFiles(folderID[0]?.id)
        if (Urls) {
            const ImageUrls: GGResponeType[] = Urls?.filter(( i: GGResponeType) => i?.mimeType?.startsWith("image/"))
            const PdfUrls: GGResponeType[] = Urls?.filter(( i: GGResponeType) => i?.mimeType?.startsWith("application/"))
            return {
                PdfUrls,
                ImageUrls
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