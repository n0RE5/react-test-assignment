
export interface IBookResponse {
    kind: string,
    totalItems: number,
    items: IBook[]
}

export interface IBook {
    id: string
    volumeInfo: {
        title: string
        subtitle: string
        categories: string[]
        authors: string[]
        publisher: string
        publishedDate: string
        description: string
        pageCount: number
        printType: string
        infoLink: string,
        previewLink: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
        language: string
    }
}