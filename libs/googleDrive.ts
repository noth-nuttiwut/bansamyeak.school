export type GGResponeType = {
    kind: string
    mimeType: string
    id: string
    name: string

}

export const getUrlsFrom = async (folderName: string) => {
    const ggUrl = `${process.env.DOMAIN_NAME}/api/google-drive`
    const FolderResp = await fetch(ggUrl + "/folders", { next: { revalidate : 15*60 }})
    const allFilesandFolders: GGResponeType[] = await FolderResp.json()

    const folderID: GGResponeType[] = allFilesandFolders.filter(f => f.name == folderName)
    const filesResp = await fetch(ggUrl + "/files/" + folderID[0]?.id, { next: { revalidate : 600 }})
    const Urls: GGResponeType[] = await filesResp.json()
    const ImageUrls: GGResponeType[] = Urls?.filter(i => i?.mimeType?.startsWith("image/"))
    const PdfUrls: GGResponeType[] = Urls?.filter(i => i?.mimeType?.startsWith("application/"))
    
    return {
        PdfUrls,
        ImageUrls
    }
}