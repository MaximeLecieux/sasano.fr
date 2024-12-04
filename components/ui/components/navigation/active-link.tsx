"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"

interface Props {
    href: string
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const ActiveLink = ({
    href,
    children,
    onClick
}: Props) => {

    const pathname = usePathname()

    // const router = useRouter()

    const isActive: boolean = useMemo(() =>{ 
        return pathname === href
    }, [pathname, href]) 


    return (
        <Link href={href} onClick={onClick} className={clsx(isActive && "text-primary font-bold underline")}>
            {children}
        </Link>
    )
}