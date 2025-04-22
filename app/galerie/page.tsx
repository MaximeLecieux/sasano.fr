"use client";
import Article from "@/components/ui/design-system/article/Article";
import Card from "@/components/ui/design-system/card/Card";
import Catalog from "@/components/ui/design-system/catalog/Catalog";
import Dialog from "@/components/ui/design-system/dialog/Dialog";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { CategoryType } from "@/lib/types/category-types";
import { CollectionType } from "@/lib/types/collection-types";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GalleryPage() {
	const [allCategory, setAllCategory] = useState<CategoryType[]>([]);
	const [allCollection, setAllCollection] = useState<CollectionType[]>([]);
	const [open, setOpen] = useState(false);
	const [typeContent, setTypeContent] = useState<string | null>(null);
	const [selectedCollectionId, setSelectedCollectionId] = useState<
		number | null
	>(null);
	const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
		null
	);

	useEffect(() => {
		const fetchData = async () => {
		  const url = "https://directus.submanta.com/items/sasano_categories";
		  const url2 = "https://directus.submanta.com/items/sasano_collections";

		  try {
		  const response = await fetch(url);
		  const response2 = await fetch(url2);
		
		  if (!response.ok || !response2.ok ) {
			throw new Error(`Response status: ${response.status}`);
		  }
		  const json = await response.json();
		  const json2 = await response2.json();
		  setAllCategory(json.data);
		  setAllCollection(json2.data);
  
		  } catch (error:any) {
		  console.error(error.message);
		  }
		};
		fetchData();
		},[])


const categoryWithCollections = allCategory.map((category) => {
		const collections = allCollection.filter(
			(collection) => collection.id_category === category.id
		);
		return {
			...category,
			collections: collections
			,
		};
	});


	const handleClickOpen = (collectionId: number) => {
		setTypeContent("catalog");
		setSelectedCollectionId(collectionId);
		setOpen((open) => !open);
	};

	const handleClose = () => {
		setTypeContent(null);
		setSelectedCollectionId(null);
		setSelectedArticleId(null);
		setOpen((open) => !open);
	};

	const handleClickCatalog = (articleId: number) => {
		setTypeContent("article");
		setSelectedArticleId(articleId);
	};

	const pageVariants = {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: -0, transition: { duration: 1 } },
	};

	type CategoryWithCollections = CategoryType & { collections: CollectionType[] };

	const categories = categoryWithCollections?.map((category: CategoryWithCollections) => {
		if (category) {
			return (
				<div key={category.id}>
					<div className="text-center my-[25px] md:text-left">
						<Typography variant="h3" component="h2" className="underline">
							{category.name}
						</Typography>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
						{category.collections.map((collection: any) => (
								<div
									onClick={() => {
										handleClickOpen(collection.id);
									}}
									className="justify-center items-center flex"
									key={collection.id}
								>
									<Card name={collection.name} pathImg={'https://directus.submanta.com/assets/'+collection.pathImg} />
								</div>
							))}
					</div>
				</div>
			);
		}
		return null; // Retourne null si aucun type ne correspond
	});

	return (
		<>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				variants={pageVariants}
			>
				<div className="flex flex-col items-center justify-center lg:items-start">
					{categories}
				</div>

				<div className="absolute flex justify-center items-center">
					<Dialog open={open} onClose={handleClose}>
						{typeContent === "catalog" && (
							<Catalog
								setArticle={(articleId: number) =>
									handleClickCatalog(articleId)
								}
								collectionId={selectedCollectionId}
							/>
						)}
						{typeContent === "article" && (
							<Article articleId={selectedArticleId} />
						)}
					</Dialog>
				</div>
			</motion.div>
		</>
	);
}
