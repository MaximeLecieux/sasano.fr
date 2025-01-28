import { articleApp } from '@/lib/BDD/article'
import { ArticleType } from '@/lib/types/article-types'
import React from 'react'
import Card from '../card/Card'

interface Props{
    collectionId: number | null
    setArticle: (articleId: number) => void 
}

export default function Catalog({
    collectionId,
    setArticle
}: Props) {

    const articles = () =>{
        if(collectionId != null) {
            return(
                articleApp
                .filter((article: ArticleType) => article.id_collection === collectionId)
                .map((article: ArticleType) => (
                    <div 
                    key={article.id}
                    onClick={() => setArticle(article.id)} // Transmet l'ID de l'article au parent
                    className='cursor-pointer'
                    >
                        <Card name={article.name} pathImg={article.pathImg} />
                    </div>
                ))
            ) 
        }

        return null
    }


  return (
    <div className='flex flex-wrap gap-8 items-center w-full h-full p-[40px]'>
      {articles()}
    </div>
  )
}
