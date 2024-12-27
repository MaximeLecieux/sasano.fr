import { Button } from '@/components/ui/design-system/button/Button';
import { presentationApp } from '@/lib/BDD/presentation'
import { PresentationType } from '@/lib/types/presentation-types';
import React from 'react'
import Image from 'next/image'
import { Typography } from '@/components/ui/design-system/typographie/Typographie';

export default function page() {

  const presentation = presentationApp.map((pres: PresentationType) => {
    if (pres) {
      return (
        <div className='grid grid-cols-4'>
          <div>
            <Image src={pres.img} alt="Logo" width={250} height={250} />
          </div>
          <div className='col-span-3'>
            <div>
              <Typography variant='body-lg' component='p'>
                {pres.description}
              </Typography>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-4'>
                <div>
                  <Button baseUrl='#'>
                    Visiter ma galerie
                  </Button>
                </div>
                <div>
                  <Button baseUrl='#'>
                    Entrer en contact
                  </Button>
                </div>
              </div>
              <div>
                <Typography variant='display' component='span'>SASANO</Typography>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
    return null;
  });

  return (
    <div>
      {presentation}
    </div>
  )
}
