"use client"
import Card from '@/components/ui/design-system/card/Card';
import Dialog from '@/components/ui/design-system/dialog/Dialog';
import { Typography } from '@/components/ui/design-system/typographie/Typographie';
import MasonryLayout from '@/components/utils/masonry/MasonryLayout';
import { categoryApp } from '@/lib/BDD/category';
import { collectionApp } from '@/lib/BDD/collection';
import { CategoryType } from '@/lib/types/category-types';
import { CollectionType } from '@/lib/types/collection-types';
import React from 'react'

export default function page() {

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen((open) => !open)
  }

  const handleClose = () => {
    setOpen((open) => !open)
  }

  const galerie = categoryApp.map((category: CategoryType) => {
    if (category){
      return (
        <div key={category.id}>
          <div className='text-center my-[25px] md:text-left'>
            <Typography variant='h3' component='h2' className='underline'>
                {category.name}
            </Typography>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center'>
            
            {collectionApp.filter((collection: CollectionType) => collection.id_category === category.id).map((collection: CollectionType) => (
                <div onClick={handleClickOpen} className='justify-center items-center flex' key={collection.id}>
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
        {galerie}
      </div>

      <div className='flex justify-center items-center'>
        <Dialog
          open={open}
          onClose={handleClose}
        >
            Hello world
        </Dialog>
      </div>
    </>
  )
}
