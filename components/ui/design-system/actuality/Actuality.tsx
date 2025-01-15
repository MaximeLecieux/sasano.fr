"use client"
import React from 'react'
import { Typography } from '../typographie/Typographie'
import clsx from 'clsx'
import useImageBrightness from '@/hooks/useImageBrightness'

interface Props {
    title: string
    description: string                
    pathImg?: string,
    date: string
    className?: string
}

export default function Actuality({
    title,
    description,
    pathImg,
    date,
    className
}: Props) {

  const isDark = useImageBrightness(pathImg || "");

  return (
    <div className="relative max-w-xs w-full group/card mb-[24px] rounded">
      <div style={{ backgroundImage: `url(${pathImg})` }} className='absolute w-full h-full top-0 left-0 bg-cover rounded blur-xs'></div>
      <div
        className={clsx(
          "cursor-pointer overflow-hidden relative card rounded shadow-2xl max-w-sm mx-auto flex flex-col justify-between",
          className
        )}
      >
        
        <div className="absolute w-full h-full top-0 left-0  rounded" />
            <div className={clsx("text transition duration-300 hover:bg-primary-200 hover:bg-opacity-75 p-4", 
            isDark === true
              ? "text-white hover:bg-primary-800 hover:text-black"
              : "text-black hover:bg-primary-200 hover:text-white")}>
              <Typography variant='body-lg' component='h3' className='relative z-10 font-semibold'>
                  {title}
              </Typography>
              <Typography variant='body-base' component='p' className='relative z-10 font-medium'>
                  {description}
              </Typography>
              <Typography variant='body-sm' component='span' className='relative z-10 font-medium'>
                  {date}
              </Typography>
            </div>
      </div>
    </div>
  )
}
