import { CardProps } from "@components/types";
import Image from "next/image";
import React from "react";

const CardComponent = ({
	img_src,
	title,
	description,
}: CardProps) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
			<Image
				src={img_src}
				alt="Sunset in the mountains"
				width="300"
				height="300"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">
					{title}
				</div>
				<p className="text-gray-700 text-base">
					{description}
				</p>
			</div>
		</div>
	);
};

export default CardComponent;
