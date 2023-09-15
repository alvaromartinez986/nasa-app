import Button from "@components/Button/Button";
import React, { ReactNode } from "react";
import NextIcon from "public/next.svg";
import BackIcon from "public/back.svg";
import Image from "next/image";
import { defaultProps } from "@components/types";

const GridComponent = ({
	className,
	children,
	onClickPage,
	page,
}: defaultProps & {
	page: number;
	onClickPage: (x: number) => void;
}) => {
	return (
		<div className={className}>
			<div className="flex flex-wrap">
				{children}
			</div>
			<div className="flex justify-center flex-row items-center">
				<Button
					className="mx-5"
					onClick={(
						e: React.MouseEvent<HTMLButtonElement>
					) => onClickPage(-1)}
				>
					<Image
						src={BackIcon}
						width="15"
						height="15"
						alt="next"
					/>
				</Button>
				<span>Page : {page}</span>
				<Button
					className="mx-5"
					onClick={(
						e: React.MouseEvent<HTMLButtonElement>
					) => onClickPage(1)}
				>
					<Image
						src={NextIcon}
						width="15"
						height="15"
						alt="next"
					/>
				</Button>
			</div>
		</div>
	);
};

export default GridComponent;
