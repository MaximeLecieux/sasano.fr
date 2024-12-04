'use client'
import { Typography } from '@/components/ui/design-system/typographie/Typographie';
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from 'react';
import { AppLinks } from '@/lib/types/app-links';
import { ActiveLink } from './active-link';
import { LinkTypes } from '@/lib/types/link-types';
import { headerAppLinks } from './app-links';
import Image from 'next/image';
import Link from 'next/link';
import useIsMdOrLess from '@/hooks/useIsMdOrLess';

export default function Header() {

  const isMdOrLarger = useIsMdOrLess()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if(isMdOrLarger){
      setIsMenuOpen(false);
    }
  };

  const headerLinks = headerAppLinks.map((link: AppLinks) => {
    if (link.type === LinkTypes.INTERNAL) {
      return (
        <ActiveLink key={link.label} href={link.baseUrl} onClick={handleLinkClick}>
          {link.label}
        </ActiveLink>
      );
    } else if (link.type === LinkTypes.EXTERNAL) {
      return (
        <a
          key={link.label}
          href={link.baseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    }
    return null;
  });

  return (
    <header className="items-center border-b-2 md:px-8">
      {/* Header mobile */}
      <div className="flex justify-between items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className=' p-3'
        >
          <BsList size={50}/>
        </button>
      </div>

      {/* Menu mobile with animation */}
      <nav
        className={`flex flex-col gap-y-12 pl-5 bg-back fixed top-0 left-0 h-full w-3/4 max-w-sm shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className='pt-3'
        >
          <RxCross2 size={50} />
        </button>
        {headerLinks}
      </nav>

      {/* Header large */}
      <div className="hidden md:flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-4">
            <div className="my-[5px]">
              
                <Image src="/images/logo.svg" alt="Logo" width={88} height={99} />
              
            </div>
            <div>
              <Typography variant="caption1" className="font-bold">
                Sasano
              </Typography>
              <Typography variant="caption3" color="gray">
                Un sac à porter demain
              </Typography>
            </div>
          </div>
        </Link>
        <nav className="flex space-x-4">
          {headerLinks}
        </nav>
      </div>
    </header>
  );
}
