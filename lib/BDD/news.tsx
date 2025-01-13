import { NewsType } from "../types/news-types";
import formatDateForDisplay from '@/hooks/formatDateForDisplay';

export const newsApp: NewsType[] = [
    {
        id: 1,
        title: "Ceci est le titre actualité 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/news/bag.jpg",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 2,
        title: "Titre actualité 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 3,
        title: "Ceci est le titre actualité 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 4,
        title: "Titre actualité 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/news/marché.jpg",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 5,
        title: "Titre actualité 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 6,
        title: "Titre actualité 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 7,
        title: "Titre actualité 7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/news/marché.jpg",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 8,
        title: "Ceci est le titre actualité 8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 9,
        title: "Titre actualité 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    },
    {
        id: 10,
        title: "Ceci est le titre actualité 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: formatDateForDisplay(new Date())
    }

]