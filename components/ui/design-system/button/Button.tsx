import clsx from 'clsx';
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Typography } from '../typographie/Typographie';
import Link from 'next/link';
import { LinkTypes } from '@/lib/types/link-types';

interface Props {
    variant?: 
        "accent" 
        | "secondary" 
        | "icon"
    icon?: React.ComponentType<IconBaseProps>
    className?: string
    children?: React.ReactNode
    baseUrl?: string
    linkType?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({
  variant = "accent",
  icon: Icon,
  className,
  children,
  baseUrl,
  linkType,
  onClick
}: Props) => {

  let variantStyle = "";

  switch (variant) {
    case "accent":
      variantStyle = "bg-primary-400 text-white hover:bg-secondary";
      break;
    case "secondary":
      variantStyle = "bg-back-400 hover:bg-back"
      break;
    case "icon":
        variantStyle = "bg-back-400 rounded-full hover:bg-back"
  }



  const buttonElement = (
    <button
    onClick={onClick}
    className={clsx(
      variantStyle,
      baseUrl,
      className,
      "p-[15px]",
      {
        "py-[15px] px-[45px] md:px-[70px] rounded": variant !== "icon",
      }
       // Styles par défaut
    )}
  >
    <Typography variant="caption2" component="span">
      {Icon && <Icon className='text-xl' />}
      {children && variant !== "icon" && children}
    </Typography>
  </button>

  );

  if(baseUrl){
    if(linkType === LinkTypes.EXTERNAL){
      <a href={baseUrl} target="_blank">
          {buttonElement}
      </a>
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }

  return buttonElement
};
