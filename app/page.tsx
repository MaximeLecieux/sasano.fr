"use client"
import { navAppLinks } from "@/components/ui/components/navigation/app-links";
import { Button } from "@/components/ui/design-system/button/Button";
import Input from "@/components/ui/design-system/form/input/Input";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { AppLinks } from "@/lib/types/app-links";
import { LinkTypes } from "@/lib/types/link-types";
import { CiMail } from "react-icons/ci";
import React, { useState } from "react";
import { Link } from "lucide-react";
import { ActiveLink } from "@/components/ui/components/navigation/active-link";

export default function Home() {

  
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true)
  
    const handleButtonClick = () => {
      setShowForm((prev) => !prev)
      setShowButton((prev) => !prev) // Bascule entre afficher/cacher
    };

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

  return (
      <div className="flex flex-col justify-center items-center gap-16">
        <div>
          <Typography
            variant="lead"
            component="p"
            color="danger"
          >
            Ceci est un message d'erreur
          </Typography>
        </div>
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
        <div className="flex flex-wrap justify-center items-center gap-[30px] md:max-w-4xl">
          {homeLinks}
        </div>
        <div>
          {showButton && (
            <Button>
            <ActiveLink onClick={handleButtonClick} href="">
              Je souscris à la newsletter
            </ActiveLink>
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
      </div>
  );
}
