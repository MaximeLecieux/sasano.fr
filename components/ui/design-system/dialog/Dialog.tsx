import clsx from 'clsx'
import React from 'react'
import { IoClose } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Article from '../article/Article';

interface Props {
    open: boolean
    className?: string
    children?: React.ReactNode
    linkType?: string
    onClose?: React.MouseEventHandler<HTMLDivElement>
}


export default function Dialog({
    open,
    onClose,
    className,
    children
}: Props) {

    const isArticle = React.isValidElement(children) && children.type === Article;

  return (
    <div className={clsx(className,
        open ? "initial" : "hidden",
        "top-0 left-0 w-full h-full fixed flex justify-center items-center bg-black bg-opacity-35 z-20")
        } 
        onClick={onClose}    
    >
        
        <div className='bg-back-200 w-full h-full md:w-[90%] md:h-[90%] lg:w-[90%] lg:h-[80%] md:border-4 md:rounded overflow-y-auto'
        onClick={(e) => e.stopPropagation()} // Evite de fermer la modal
        >
            <div className='flex justify-end p-[5px]'>
                <div className='cursor-pointer' onClick={onClose}>
                    <IoClose size={50} color=''/>
                </div>
                
                
            </div>
            <div className='p-[15px]'>
                {children}
            </div>
        </div>

    </div>
  )
}
