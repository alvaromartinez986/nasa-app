import React, { ReactNode } from "react";
import Image from "next/image";
import { defaultProps } from "@components/types";

const Button = ({
	className,
	children,
	onClick,
}: defaultProps & {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			onClick={onClick}
			className={`bg-gray-100 hover:bg-gray-200 text-white py-2 px-4 rounded ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
