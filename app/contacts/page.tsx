"use client"
import Input from '@/components/ui/design-system/form/input/Input'
import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import React, { FormEvent, useRef } from 'react'
import { CiMail, CiPhone, CiStar } from 'react-icons/ci'
import { RiContactsLine } from 'react-icons/ri'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function contacts() {

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: -0, transition: { duration: 1 } },
  };


  const form = useRef<HTMLFormElement>(null)
  const messageRef = useRef<HTMLParagraphElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current){
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', 
          form.current, 
          {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
          })
        .then(
          () => {
            if(messageRef.current){
              messageRef.current.textContent = 'Message reçu 👍 Je vous répond dès que possible !';
            }
            
            setTimeout(() => {
              if (messageRef.current) {
                messageRef.current.textContent = '';
              }
            }, 6000);

            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            if (messageRef.current) {
              messageRef.current.textContent = 'Message non envoyé (service error) 👎';
            }
          },
        );
    }
  };

  return (
    <motion.div 
    initial="initial" 
    
    animate="animate" 
    exit="exit" 
    variants={pageVariants}
    >
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
            <form ref={form} onSubmit={sendEmail}>
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
                <p ref={messageRef} className="text-center text-2xl"></p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
