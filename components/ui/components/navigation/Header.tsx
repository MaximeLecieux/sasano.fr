import { Typography } from '@/components/ui/design-system/typographie/Typographie'
import Link from 'next/link'
import React from 'react'
import { AppLinks } from '@/lib/types/app-links'
import { ActiveLink } from './active-link'
import { LinkTypes } from '@/lib/types/link-types'
import { headerAppLinks } from './app-links'
import Image from 'next/image'

export default function Header() {

    interface headerLinkProps {
        data: AppLinks
    }

    const headerLinks = headerAppLinks.map((link: AppLinks) => {
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
                <a key={link.label} href={link.baseUrl} target="_blank" rel="noopener noreferrer">
                    {link.label}
                </a>
            );
        }
        return null; // Retourne null si aucun type ne correspond
    })

  return (
    <header className='flex justify-between items-center border-b-2'>
        <div className='flex items-center'>
            <div className='my-[5px]'>
                <Image
                    src="/images/logo.svg"
                    alt='Logo'
                    width={88}
                    height={99}
                />
            </div>
            <div>
                <Typography variant='caption1' className='font-bold'>
                    Sasano
                </Typography>
                <Typography variant='caption3' color='gray'>
                    Un sac à porter demain
                </Typography>
            </div>
        </div>
        <div className='flex'>
            {headerLinks}
        </div>
    </header>
  )
}