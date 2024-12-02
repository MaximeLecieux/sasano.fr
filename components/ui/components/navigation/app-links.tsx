import { AppLinks } from "@/lib/types/app-links";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export const headerAppLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Présentation",
        baseUrl: "/presentation",
        type: "internal"
    },
    {
        label: "Contacts",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Galerie",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Actualités",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "FAQ",
        baseUrl: "/#",
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
