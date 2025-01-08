import { Button } from '@/components/ui/design-system/button/Button'
import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import { questionsApp } from '@/lib/BDD/faq'
import { QuestionType } from '@/lib/types/question-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function page() {

  const news = questionsApp.map((question: QuestionType) => {
    if (question){
      return (
        <div key={question.id} className='bg-primary-200'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>
                {question.description}
                {/* <Typography variant='body-lg' component='p'>
                  {question.description}
                </Typography> */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
      )     
    }
    return null; // Retourne null si aucun type ne correspond
  })

  return (
    <div className='flex flex-col gap-10 items-center'>
      <div>
        <Typography variant='lead' component='p'>
            Ceci est un texte d’explication pour la foire au question
        </Typography>
      </div>
      <div className='flex flex-col gap-4'>

        {news}

      </div>
      <div className='flex flex-col gap-10 items-center'>
        <div>
            <Typography variant='lead' component='p'>
                Ceci est un texte d’explication pour la foire au question
            </Typography>
        </div>
        <div>
            <Button baseUrl='/contacts'>
                Je souhaite poser une question
            </Button>
        </div>
        
      </div>
    </div>
  )
}
