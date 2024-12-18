import clsx from 'clsx';
import React from 'react'
import { IconBaseProps } from 'react-icons';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from '../../button/Button';

interface Props {
    type: "email"
        | "submit"
    className?: string
    isRequired?: boolean
    label?: string
    icon?: React.ComponentType<IconBaseProps>
    name: string
}

export default function Input({
    type,
    className,
    isRequired = false,
    label,
    icon: Icon,
    name
}: Props) {

    switch (type) {
        case "submit" :
            return (
                    <Button>
                        <div className='flex items-center gap-2'>
                            <IoPaperPlaneOutline />
                            <input type='submit'/>
                        </div>
                        
                    </Button>
            )
        default:
            return (
                <label className='relative block'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        {Icon && <Icon className='h-5 w-5 fill-slate-300'/>}
                    </span>
                    <input
                        type={type}
                        id={name}
                        name={name}
                        placeholder={label}
                        required={isRequired ? true : false}
                        className={clsx(
                            className,
                            "placeholder:text-gray-700 block bg-white w-full border border-gray-500 rounded py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-700 focus:ring-gray-500 focus:ring-4"
                        )}
                    />
                </label>
                
              )
    }

}
