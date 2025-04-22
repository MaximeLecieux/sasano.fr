export interface ArticleType {
    id: number
    name: string
    description: string
    pathImage: string
    id_collection: number
    id_galerie: number
    images: any[]
   // Add an index signature to allow dynamic keys
}