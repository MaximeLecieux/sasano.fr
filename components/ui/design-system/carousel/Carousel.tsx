import { articleApp } from '@/lib/BDD/article';
import { galerieApp } from '@/lib/BDD/galerie';
import { ArticleType } from '@/lib/types/article-types';
import { GalerieType } from '@/lib/types/galerie-types';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';

interface Props {
    articleId: number
}

export default function Carousel({articleId}: Props) {


    const galerie = articleApp
        .filter((article: ArticleType) => article.id === articleId) // Filtrer l'article par articleId
        .map((article: ArticleType) => {
            // Trouver la galerie correspondante
            const galerieAssociee = galerieApp.find(
            (galerie: GalerieType) => galerie.id === article.id_galerie
            );

            return galerieAssociee ? galerieAssociee.pathImgs : []; // Retourner pathImgs ou un tableau vide si non trouvé
        })[0]; // Extraire le premier élément car articleId est unique

    const carouselItems = galerie.map((imgPath, index) => (
            <img
            src={imgPath}
            alt={`Galerie Image ${index + 1}`}
            className=""
            key={index}
            />
        ));

  return (
    <div>

        {carouselItems}
    </div>

  )
}
