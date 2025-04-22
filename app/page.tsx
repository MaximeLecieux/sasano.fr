"use client"
import { navAppLinks } from "@/components/ui/components/navigation/app-links";
import { Button } from "@/components/ui/design-system/button/Button";
import Input from "@/components/ui/design-system/form/input/Input";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { AppLinks } from "@/lib/types/app-links";
import { LinkTypes } from "@/lib/types/link-types";
import { CiMail } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { CommentaryType } from "@/lib/types/commentary-types";
import Link from "next/link";
import { NewsType } from "@/lib/types/news-types";
import useIsMdOrLess from "@/hooks/useIsMdOrLess";
import { displayNameSurname } from "@/hooks/displayNameSurname";
import { motion } from "framer-motion";

export default function Home()
{
  const [allNews, setAllNews] = useState<NewsType[]>([]);
  const [allCommentary, setAllCommentary] = useState<CommentaryType[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      const url = "https://directus.submanta.com/items/sasano_news";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setAllNews(json.data);

      } catch (error:any) {
        console.error(error.message);
      }
    };

    fetchData();
  },[])
      
        useEffect(() => {
      
      
        const fetchData = async () => {
          const url = "https://directus.submanta.com/items/sasano_comments";
          try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          setAllCommentary(json.data);
  
          } catch (error:any) {
          console.error(error.message);
          }
        };
      
        fetchData();
        },[])

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: -0, transition: { duration: 1 } },
  };


  // For news
  const isMdOrLarger = useIsMdOrLess()
  let displayNews = true
  
  if(isMdOrLarger){
    displayNews = false
  }
  const news = allNews.slice(-2).map((actuality: NewsType) => {
    if (actuality){
      return (
        <Link href='/actuality' key={actuality.id}>
          <div className="bg-tertiary pl-[25px] py-[15px] pr-[105px] rounded-l-[50px]" key={actuality.id}>
            <div>
              <Typography variant="body-lg" component="p" className="max-w-[240px] truncate">
                {actuality.title}
              </Typography>
            </div>
          </div>
        </Link>
        
      )     
    }
    return null; // Retourne null si aucun type ne correspond
  })

  const message = allNews.find((actuality: NewsType) => actuality.important === true)


  // For buttons nav
  const homeLinks = navAppLinks.map((link: AppLinks) => {
    if (link.type === LinkTypes.INTERNAL) {
      return (
        <Button key={link.label} baseUrl={link.baseUrl} linkType={link.type}>
            {link.label}
        </Button>
      );
    } else if (link.type === LinkTypes.EXTERNAL) {
      return (
        <a
          key={link.label}
          href={link.baseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    }
    return null;
  });

  // For form subscription
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true)

  const handleButtonClick = () => {
    setShowForm((prev) => !prev)
    setShowButton((prev) => !prev) // Bascule entre afficher/cacher
  };

  // For commentary
 
  const comments = allCommentary?.map((comment: CommentaryType) => {
    console.log(comment)
    if (comment){
      return (
        <div className="flex flex-col gap-4 text-center" key={comment.id} data-value={comment.id}>
          <div>
            <Typography variant="body-lg" component="p">
              {comment.content}
            </Typography>
          </div>
          <div>
            <Typography variant="caption3" component="p">
              {displayNameSurname(comment.firstName, comment.lastName) }
            </Typography>
          </div>
        </div>
      )     
    }
    return null; // Retourne null si aucun type ne correspond
  })

  return (
    <>
    <motion.div 
              initial="initial" 
              animate="animate" 
              exit="exit" 
              variants={pageVariants}
    >
      <div className="flex flex-col justify-center items-center gap-16">
        
          {message && message.important && (
            <div>
              <Typography
              variant="lead"
              component="p"
              color="danger"
            >
              {message.title}
            </Typography>
            </div>
          )}

        <div className="flex flex-col gap-6 text-center">
          <Typography
            variant="h1"
            component="h1"
          >
            Sacré Sac de Noeud
          </Typography>
          <Typography
            variant="h2"
            component="h2"
          >
            Un sac à porter demain
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[30px] md:max-w-4xl" >
          {homeLinks}
        </div>
        <div>
          {showButton && (
            <Button onClick={handleButtonClick}>
              Je souscris à la newsletter !
            </Button>
          )}
          {showForm && (
            <div>
              <form action="">
                <div className="flex flex-col gap-5 justify-center items-center">
                <Input type="email" label="Adresse mail" name="mail" icon={CiMail}/>
                <Input type="submit" label={"Envoyer"} name={"submit"}/>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="max-w-full px-11 md:p-0 md:max-w-2xl flex flex-col gap-8 items-center">
          <AliceCarousel
            animationDuration={2000}
            animationType="fadeout"
            autoPlay
            infinite
            autoPlayInterval={4000}
            disableDotsControls
            disableButtonsControls
            mouseTracking
            items={comments}
            controlsStrategy="responsive"
          />
          <Link href="/commentary">
            <Button variant="secondary">
              Je souhaite laisser un commentaire
            </Button>
          </Link>
        </div>
      </div>
      </motion.div>
      {displayNews && 
        <div className="absolute top-0 right-0 flex flex-col gap-8 pt-11">
        {news}
        </div>
      }
    </>
  );
}
