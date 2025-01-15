import { Button } from '@/components/ui/design-system/button/Button'
import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import { AccordionDemo } from '@/components/ui/accordion-tabs-with-plus-minus'



export default function page() {

  return (
    <div className='flex flex-col gap-10 items-center p-[15px]'>
      <div>
        <Typography variant='lead' component='p' className='text-center'>
            Ceci est un texte d’explication pour la foire au question
        </Typography>
      </div>
      <div className='flex flex-col gap-4'>

        <div className=' block'>
          <AccordionDemo />
        </div>

      </div>
      <div className='flex flex-col gap-10 items-center'>
        <div>
            <Typography variant='lead' component='p' className='text-center'>
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
