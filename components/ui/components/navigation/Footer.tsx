import React from 'react'
import { footerAppLinks } from './app-links'
import { AppLinks } from '@/lib/types/app-links';
import { LinkTypes } from '@/lib/types/link-types';
import { ActiveLink } from './active-link';
import { Button } from '../../design-system/button/Button';
import { Typography } from '../../design-system/typographie/Typographie';
import Link from 'next/link';

export default function Footer() {

    const currentYear = new Date().getFullYear()

    const footerLinks = footerAppLinks.map((link: AppLinks) => {
        if (link.type === LinkTypes.INTERNAL) {
            return (
                <div>
                    <ActiveLink key={link.label} href={link.baseUrl}>
                    {link.label}
                    </ActiveLink>
                </div>
            );
        } else if (link.type === LinkTypes.EXTERNAL) {
            return (
                <div>
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
    <footer className='flex flex-col-reverse items-center gap-9 md:flex-row md:justify-between  border-t-2 py-[20px] md:px-8'>
        <div>
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
        <div>
            <Typography
                variant='caption4'
            >
                <Link href="/legal" className='underline'>
                    Mentions légales
                </Link>
            </Typography>
        </div>
        <div className='flex gap-5'>
            {footerLinks}
        </div>
    </footer>
  )
}
