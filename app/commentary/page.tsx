import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import  Input  from '@/components/ui/design-system/form/input/Input'
import React from 'react'
import { CiMail, CiPhone, CiStar } from 'react-icons/ci'
import { RiContactsLine } from 'react-icons/ri'

export default function page() {
  return (
    <div>
            <div className='flex flex-col gap-6 items-center'>
              <div>
                <Typography variant='lead' component='p'>
                  Ceci est un message afin de proposer au client de laisser un commentaire
                </Typography>
              </div>
              <div className='max-w-2xl'>
                <form action="">
                  <div className='flex flex-col gap-6 '>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
                      <Input type="text" label="Nom" name="surname" icon={RiContactsLine}/>
                      <Input type="text" label="Prénom" name="name" icon={RiContactsLine}/>
                    </div>
                    <div>
                      <Input type="text-area" label="Ecrire votre commentaire..." name="text"/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='flex flex-col gap-2'>
                        <Input type="checkbox" label="J'accepte les conditions d'utilisation" name="cgu"/>
                      </div>
                      <div>
                      <Input type="submit" label={"Envoyer"} name={"submit"}/>
                      </div>
                    </div>
                    
                    </div>
                </form>
              </div>
            </div>
    </div>
  )
}
