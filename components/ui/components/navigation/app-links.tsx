import { AppLinks } from "@/lib/types/app-links";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export const navAppLinks: AppLinks[] = [
    // {
    //     label: "Accueil",
    //     baseUrl: "/",
    //     type: "internal"
    // },
    {
        label: "Présentation",
        baseUrl: "/presentation",
        type: "internal"
    },
    {
        label: "Contacts",
        baseUrl: "/contacts",
        type: "internal"
    },
    {
        label: "Galerie",
        baseUrl: "/galerie",
        type: "internal"
    },
    {
        label: "Actualités",
        baseUrl: "/actuality",
        type: "internal"
    },
    {
        label: "FAQ",
        baseUrl: "/FAQ",
        type: "internal"
    }
]

export const footerAppLinks: AppLinks[] = [
    {
        label: "Facebook",
        baseUrl: "https://www.facebook.com",
        type: "external",
        icon : FaFacebook
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com",
        type: "external",
        icon : FaInstagram
    },
    {
        label: "Pinterest",
        baseUrl: "https://fr.pinterest.com",
        type: "external",
        icon : FaPinterest
    }
]
