
import { ArticleType } from "@/lib/types/article-types";
import React, { useEffect, useState } from "react";
import { Typography } from "../typographie/Typographie";
import { Button } from "../button/Button";
import { Link } from "react-alice-carousel";
// import Carousel from "../carousel/Carousel";
import EmblaCarousel from "../carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

interface Props {
	articleId: number | null;
}

export default function Article({ articleId }: Props) {
	const [isExpanded, setIsExpanded] = useState(false);

	const [article, setArticle] = useState<ArticleType>();
	
		useEffect(() => {
				const fetchData = async () => {
				  const url = `https://directus.submanta.com/items/sasano_articles/${articleId}?fields=*,images.*`;
		  
				  try {
				  const response = await fetch(url);
				
				  if (!response.ok ) {
					throw new Error(`Response status: ${response.status}`);
				  }
				  const json = await response.json();
				  
				  setArticle(json.data);
		  
				  } catch (error:any) {
				  console.error(error.message);
				  }
				};
				fetchData();
				},[])

	const clickExpand = () => {
		setIsExpanded((prev) => !prev);
	};

	// const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

	if (articleId === null) {
		return <div>Aucun article sélectionné</div>;
	}
	
	const imagesArray = article?.images.map((img : any) => "https://directus.submanta.com/assets/" + img["directus_files_id"]);

	if (!article) {
		return <div>Aucun article trouvé</div>;
	}

	const options: EmblaOptionsType = { dragFree: true, loop: true };

	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="h-[50vh]">
					<EmblaCarousel slides={imagesArray} options={options} />
				</div>
				<div
					className={`relative p-[30px] description-container
                ${
									isExpanded
										? "max-h-[800px] overflow-y-auto"
										: "max-h-[250px] overflow-hidden"
								} transition-all duration-500 ease-in-out`}
				>
					<div>
						<div className="flex flex-col gap-4">
							<Typography variant="h3" component="h2">
								{article.name}
							</Typography>
							<Typography variant="body-lg" component="p">
								<div dangerouslySetInnerHTML={{ __html: article.description }}/>
							</Typography>
							<Link href="/contacts">
								<Button>Poser une question</Button>
							</Link>
						</div>
						<div
							className={
								isExpanded
									? "hidden"
									: "absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
							}
						>
							<Button onClick={clickExpand}>En savoir plus</Button>
						</div>
						<div
							className={
								isExpanded
									? "hidden"
									: "absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-t from-back-200 to-transparent blur-sm"
							}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
