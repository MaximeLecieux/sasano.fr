"use client"
import React from 'react'
import { Typography } from '../typographie/Typographie'
import clsx from 'clsx'
import useImageBrightness from '@/hooks/useImageBrightness'
import Image from 'next/image'

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
    <div className="max-w-xs w-full group/card mb-[24px] rounded shadow-xl">
      <div
        className={clsx(
          "cursor-pointer overflow-hidden card  max-w-sm mx-auto flex flex-col justify-between",
          className
        )}
      >
            <div>
            {pathImg && <Image 
              src={pathImg}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-t"
            />}
          </div>
        <div className="" />
            <div className={clsx("text p-4")}>
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
