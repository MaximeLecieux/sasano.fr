"use client";
import Actuality from "@/components/ui/design-system/actuality/Actuality";
import MasonryLayout from "@/components/utils/masonry/MasonryLayout";
import formatDateForDisplay from "@/hooks/formatDateForDisplay";
import { NewsType } from "@/lib/types/news-types";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function ActualityPage() {

	const [allNews, setAllNews] = useState<NewsType[]>([]);
	
	  useEffect(() => {
	
		// fetchData('sasano_news', setAllNews);
	
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
	  
	const pageVariants = {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: -0, transition: { duration: 1 } },
	};

	const news = allNews
		.sort((a, b) => b.id - a.id)
		.map((news: NewsType) => {
			if (news) {
				return (
					<div key={news.id}>
						<Actuality
							title={news.title}
							description={news.description || "aucune description"}
							pathImg={`https://directus.submanta.com/assets/${news.img}`}
							date={news.date ? formatDateForDisplay(new Date(news.date)) : "Invalid date"}
						/>
					</div>
				);
			}
			return null; // Retourne null si aucun type ne correspond
		});

	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
		>
			<div className="flex flex-col items-center">
				<MasonryLayout>{news}</MasonryLayout>
			</div>
		</motion.div>
	);
}
