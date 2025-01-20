import Input from '@/components/ui/design-system/form/input/Input'
import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import React from 'react'
import { CiMail, CiPhone, CiStar } from 'react-icons/ci'
import { RiContactsLine } from 'react-icons/ri'

export default function contacts() {
  return (
    <div className='flex flex-col items-center gap-20 w-auto text-center'>
      <div className='flex flex-col gap-6'>
        <div>
          <Typography variant='lead' component='p'>
              Ceci est un message afin de proposer au client de s’inscrire à la newsletter
          </Typography>
        </div>
        <div>
          <form action="">
            <div className="flex flex-col gap-5 justify-center items-center">
              <Input type="email" label="Adresse mail" name="mail" icon={CiMail}/>
              <Input type="submit" label={"Envoyer"} name={"submit"}/>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <div>
          <Typography variant='lead' component='p'>
            Ceci est un message afin de proposer au client de rentrer en contact s’il a des questions ou demandes à faire
          </Typography>
        </div>
        <div className='max-w-2xl'>
          <form action="">
            <div className='flex flex-col gap-6 '>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
                <Input type="text" label="Nom / Prénom" name="name" icon={RiContactsLine}/>
                <Input type="email" label="Adresse mail" name="mail" icon={CiMail}/>
                <Input type="phone" label="Téléphone" name="phone" icon={CiPhone}/>
              </div>
              <div>
                <Input type="text" label="Objet de la demande" name="object" icon={CiStar}/>
              </div>
              <div>
                <Input type="text-area" label="Ecrire votre message..." name="text"/>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                  <Input type="checkbox" label="J'accepte les conditions d'utilisation" name="cgu"/>
                  <Input type="checkbox" label="S'inscrire à la newsletter" name="newsletter" isRequired={false}/>
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
