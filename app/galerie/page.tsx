"use client"
import Article from '@/components/ui/design-system/article/Article';
import Card from '@/components/ui/design-system/card/Card';
import Catalog from '@/components/ui/design-system/catalog/Catalog';
import Dialog from '@/components/ui/design-system/dialog/Dialog';
import { Typography } from '@/components/ui/design-system/typographie/Typographie';
import { articleApp } from '@/lib/BDD/article';
import { categoryApp } from '@/lib/BDD/category';
import { collectionApp } from '@/lib/BDD/collection';
import { ArticleType } from '@/lib/types/article-types';
import { CategoryType } from '@/lib/types/category-types';
import { CollectionType } from '@/lib/types/collection-types';
import React from 'react'

export default function page() {

  const [open, setOpen] = React.useState(false)
  const [typeContent, setTypeContent] = React.useState<string | null>(null)
  const [selectedCollectionId, setSelectedCollectionId] = React.useState<number | null>(null)
  const [selectedArticleId, setSelectedArticleId] = React.useState<number | null>(null)

  const handleClickOpen = (collectionId: number) => {
    setTypeContent("catalog")
    setSelectedCollectionId(collectionId)
    setOpen((open) => !open)
  }

  const handleClose = () => {
    setTypeContent(null)
    setSelectedCollectionId(null)
    setSelectedArticleId(null)
    setOpen((open) => !open)
  }

  const handleClickCatalog = (articleId: number) => {
    setSelectedArticleId(articleId)
    setTypeContent("article")
  }

  const categories = categoryApp.map((category: CategoryType) => {
    if (category){
      return (
        <div key={category.id}>
          <div className='text-center my-[25px] md:text-left'>
            <Typography variant='h3' component='h2' className='underline'>
                {category.name}
            </Typography>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
            
            {collectionApp.filter((collection: CollectionType) => collection.id_category === category.id).map((collection: CollectionType) => (
                <div onClick={() => {
                      handleClickOpen(collection.id) 
                      }} 
                      className='justify-center items-center flex' key={collection.id}>
                  <Card
                  name={collection.name}
                  pathImg={collection.pathImg}
                  />
                </div>
            ))}

          </div>
        </div>
        
      )     
    }
    return null; // Retourne null si aucun type ne correspond
  })

  
  return (
    <>
      <div className='flex flex-col items-center justify-center lg:items-start'>
        {categories}
      </div>

      <div className='flex justify-center items-center'>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          {typeContent === "catalog" && 
            <Catalog 
              setArticle={(articleId: number) => handleClickCatalog(articleId)} 
              collectionId={selectedCollectionId}
            />
          }
          {typeContent === "article" && <Article articleId={selectedArticleId} />}
        </Dialog>
      </div>
    </>
  )
}