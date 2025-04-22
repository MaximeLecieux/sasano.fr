"use client";
import Actuality from "@/components/ui/design-system/actuality/Actuality";
import MasonryLayout from "@/components/utils/masonry/MasonryLayout";
import { newsApp } from "@/lib/BDD/news";
import { NewsType } from "@/lib/types/news-types";
import { motion } from "framer-motion";
import React from "react";

export default function ActualityPage() {
	const pageVariants = {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: -0, transition: { duration: 1 } },
	};

	const news = newsApp
		.sort((a, b) => b.id - a.id)
		.map((news: NewsType) => {
			if (news) {
				return (
					<div key={news.id}>
						<Actuality
							title={news.title}
							description={news.description || "aucune description"}
							pathImg={news.img}
							date={news.date || "aucune date précise"}
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
