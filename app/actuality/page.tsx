import Actuality from '@/components/ui/design-system/actuality/Actuality'
import MasonryLayout from '@/components/utils/masonry/MasonryLayout'
import { newsApp } from '@/lib/BDD/news'
import { NewsType } from '@/lib/types/news-types'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'

export default function page() {

  const news = newsApp.map((news: NewsType) => {
    if (news){
      return (
        <div key={news.id}>
          <Actuality
            title={news.title}
            description={news.description}
            pathImg={news.img}
            date={news.date}
          />
        </div>
        
      )     
    }
    return null; // Retourne null si aucun type ne correspond
  })

  return (
    <div className='flex flex-col items-center'>
      <MasonryLayout>
        {news}
      </MasonryLayout>

    </div>
  )
}
