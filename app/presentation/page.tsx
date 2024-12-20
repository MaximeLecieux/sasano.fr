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
        <div className='grid grid-cols-3'>
          <div>
            <Image src={pres.img} alt="Logo" width={400} height={400} />
          </div>
          <div className='col-span-2'>
            <Typography variant='body-lg' component='p'>
              {pres.description}
            </Typography>
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
