import React from "react";
import GridComponent from "./GridComponent";
import { defaultProps } from "@components/types";

const GridComponentPaginator = ({
	page,
	setPage,
	className,
	children,
}: defaultProps & {
	page: number;
	setPage: (x: number) => void;
}) => {
	const onClickPage = (changePage: number) => {
		setPage(
			page === 1 && changePage === -1
				? 1
				: page + changePage
		);
	};

	return (
		<GridComponent
			onClickPage={onClickPage}
			page={page}
			className={className}
		>
			{children}
		</GridComponent>
	);
};

export default GridComponentPaginator;
