
import { ArticleType } from '@/lib/types/article-types'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'

interface Props{
    collectionId: number | null
    setArticle: (articleId: number) => void 
}

export default function Catalog({
    collectionId,
    setArticle
}: Props) {

    const [allArticles, setAllArticles] = useState<ArticleType[]>([]);


    useEffect(() => {
            const fetchData = async () => {
              const url = "https://directus.submanta.com/items/sasano_articles?filter[id_collection][_eq]="+collectionId;
      
              try {
              const response = await fetch(url);

         
            
              if (!response.ok ) {
                throw new Error(`Response status: ${response.status}`);
              }
              const json = await response.json();

            
              
              setAllArticles(json.data);
      
              } catch (error:any) {
              console.error(error.message);
              }
            };
            
            fetchData();
            
            },[])




    const articles = () =>{
        if(collectionId != null) {
            return(
                allArticles?.map((article: ArticleType) => (
                 
                    <div 
                    key={article.id}
                    onClick={() => setArticle(article.id)} // Transmet l'ID de l'article au parent
                    className='cursor-pointer'
                    >
                        <Card name={article.name} pathImg={"https://directus.submanta.com/assets/" + article.pathImage} />
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
