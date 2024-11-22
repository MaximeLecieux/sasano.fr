import clsx from 'clsx'
import React from 'react'

interface Props {
    variant?:
        "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "lead"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption1"
        | "caption2"
        | "caption3"
        | "caption4"
    component?:
        "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "div"
        | "p"
        | "span"
    weight?:
        "regular"
        | "medium"
    className?: string
    children : React.ReactNode
}

export const Typography = ({
    variant = "h3", // Variant par défaut
    component : Component = "div", 
    weight = "regular",
    className, 
    children
}:Props) => {

    let variantStyle: string = ""
    

    switch (variant){
        case "display":
            variantStyle = "text-8xl"
            break
        case "h1":
            variantStyle = "text-7xl"
            break
        case "h2":
            variantStyle = "text-6xl"
            break
        case "h3": //Default
            variantStyle = "text-5xl"
            break
        case "h4":
            variantStyle = "text-4xl"
            break
        case "h5":
            variantStyle = "text-3xl"
            break
        case "lead":
            variantStyle = "text-2xl"
            break
        case "body-lg":
            variantStyle = "text-lg"
            break
        case "body-base":
            variantStyle = "text-base"
            break
        case "body-sm":
            variantStyle = "text-sm"
            break
        case "caption1":
            variantStyle = "text-caption1"
            break
        case "caption2":
            variantStyle = "text-caption2"
            break
        case "caption3":
            variantStyle = "text-caption3"
            break
        case "caption4":
            variantStyle = "text-caption4"
            break
    }

    return (
        <Component className={clsx(
            variantStyle,
            weight,
            className,
            )}>

            {children}

        </Component>
    ) 
}