"use client";
import { Button } from "@/components/ui/design-system/button/Button";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { AccordionTabs } from "@/components/ui/design-system/accordion/AccordionTabs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { QuestionType } from "@/lib/types/question-types";

export default function FAQPage() {

	
	  const [allFAQ, setAllFAQ] = useState<QuestionType[]>([]);
	
	  useEffect(() => {
	
		const fetchData = async () => {
		  const url = "https://directus.submanta.com/items/sasano_faq";
		  try {
			const response = await fetch(url);
			if (!response.ok) {
			  throw new Error(`Response status: ${response.status}`);
			}
	
			const json = await response.json();
			setAllFAQ(json.data);

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
			<div className="flex flex-col gap-10 items-center">
				<div>
					<Typography variant="lead" component="p" className="text-center">
						Ceci est un texte d’explication pour la foire au question
					</Typography>
				</div>
				<div className="flex flex-col gap-4">
					<div className=" block">
						<AccordionTabs allFAQ={allFAQ} />
					</div>
				</div>
				<div className="flex flex-col gap-10 items-center">
					<div>
						<Typography variant="lead" component="p" className="text-center">
							Ceci est un texte d’explication pour la foire au question
						</Typography>
					</div>
					<div>
						<Button baseUrl="/contacts">Je souhaite poser une question</Button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
