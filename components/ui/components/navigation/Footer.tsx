import React from 'react'
import { footerAppLinks } from './app-links'
import { AppLinks } from '@/lib/types/app-links';
import { LinkTypes } from '@/lib/types/link-types';
import { ActiveLink } from './active-link';
import { Button } from '../../design-system/button/Button';
import { Typography } from '../../design-system/typographie/Typographie';

export default function Footer() {

    const currentYear = new Date().getFullYear()

    const footerLinks = footerAppLinks.map((link: AppLinks) => {
        if (link.type === LinkTypes.INTERNAL) {
            return (
                <div className='mr-[30px]'>
                    <ActiveLink key={link.label} href={link.baseUrl}>
                    {link.label}
                    </ActiveLink>
                </div>
            );
        } else if (link.type === LinkTypes.EXTERNAL) {
            return (
                <div className='mr-[30px]'>
                    <a key={link.label} href={link.baseUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant='icon'
                            icon={link.icon}
                        />
                    </a>
                </div>
                
            );
        }
        return null; // Retourne null si aucun type ne correspond
    })

  return (
    <footer className='flex justify-between items-center border-t-2 py-[20px]'>
        <div className='flex items-center'>
            <div className='ml-[10px]'>
            <Typography 
                variant="caption4"
            >
                {`Copyright © ${currentYear} | Propulsed by `}
                <a href="https://lecieux.fr" target="_blank" className="underline">
                    {`Maxime LECIEUX EI`}
                </a>
            </Typography>
            </div>
        </div>
        <div className='flex'>
            {footerLinks}
        </div>
    </footer>
  )
}
