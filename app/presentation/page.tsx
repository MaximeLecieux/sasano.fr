"use client";
import { Button } from "@/components/ui/design-system/button/Button";
import { PresentationType } from "@/lib/types/presentation-types";
import React, { useEffect, useState } from "react";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { motion } from "framer-motion";

export default function Presentationpage() {

  const [presentation, setPresentation] = useState<PresentationType>();
    
      useEffect(() => {
    
    
      const fetchData = async () => {
        const url = "https://directus.submanta.com/items/sasano_presentation";
        try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        setPresentation(json.data);

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



	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
		>
			<div className="grid grid-cols-4 gap-4">
					<div className="col-span-4 md:col-span-1">
						<img
							src={'https://directus.submanta.com/assets/'+presentation?.img}
							alt="Logo"
							width={250}
							height={250}
							className="md:block hidden"
						/>
					</div>
					<div className="col-span-4 md:col-span-3">
						<div>
							<Typography variant="body-lg" component="p">
				<div dangerouslySetInnerHTML={{ __html: presentation?.description || "" }} />
							</Typography>
						</div>
						<div className="flex items-center justify-between flex-col md:flex-row">
							<div className="flex flex-col gap-4 m-4 md:flex-row md:mb-0">
								<div>
									<Button baseUrl="/galerie">Visiter ma galerie</Button>
								</div>
								<div>
									<Button baseUrl="/contacts">Entrer en contact</Button>
								</div>
							</div>

							<div className="text-center md:text-left">
								<Typography variant="display" component="h1">
									SASANO
								</Typography>
							</div>
						</div>
					</div>
				</div>
		</motion.div>
	);
}
