import { defaultProps } from "@components/types";
import React from "react";

const Filter = ({
	className,
	children,
}: defaultProps) => {
	return (
		<div className={`inline ${className}`}>
			{children}
		</div>
	);
};

export default Filter;
