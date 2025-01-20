import clsx from 'clsx'
import React from 'react'
import { IoClose } from "react-icons/io5";

interface Props {
    open: boolean
    className?: string
    children?: React.ReactNode
    baseUrl?: string
    linkType?: string
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

export default function Dialog({
    open,
    onClose,
    className,
    children
}: Props) {
  return (
    <div className={clsx(className,
        open ? "initial" : "hidden",
        "top-0 left-0 w-full h-full fixed flex justify-center items-center bg-black bg-opacity-35 z-20")
        } 
        onClick={onClose}    
    >
        
        <div className='relative bg-black w-full h-full md:w-[90%] md:h-[90%] lg:w-[90%] lg:h-[80%]'
        onClick={(e) => e.stopPropagation()} // Evite de fermer la modal
        >
            <div className='absolute top-0 right-0 p-[15px] cursor-pointer' onClick={onClose}>
                <IoClose size={50} color='white'/>
            </div>
            {children}
        </div>

    </div>
  )
}
