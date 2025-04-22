import clsx from "clsx";
import React from "react";
import { Typography } from "../typographie/Typographie";

interface Props {
	name: string;
	pathImg: string;
	className?: string;
}

export default function Card({ name, pathImg, className }: Props) {
	return (
		<div className="max-w-xs w-full group/card rounded shadow-xl cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
			<div
				className={clsx(
					"overflow-hidden card  max-w-sm mx-auto flex flex-col justify-between",
					className
				)}
			>
				<div>
					<img
						src={pathImg}
						alt={name}
						height="400"
						width="400"
						className="object-contain rounded-t"
					/>
				</div>
				<div />
				<div className={clsx("text p-4")}>
					<Typography
						variant="body-lg"
						component="h3"
						className="relative z-10 font-semibold"
					>
						{name}
					</Typography>
				</div>
			</div>
		</div>
	);
}
