import { ReactNode } from "react";

export type CardProps = {
	img_src: string;
	title: string;
	description: string;
};

export type defaultProps = {
	children?: ReactNode;
	className?: string;
};
