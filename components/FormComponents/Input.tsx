import { defaultProps } from "@components/types";
import React from "react";

const Input = ({
	className,
	type,
	label,
	value,
	onChange,
}: defaultProps & {
	type: string;
	label: string;
	value: number;
	onChange: (
		e: React.FormEvent<HTMLInputElement>
	) => void;
}) => {
	return (
		<div className={`mb-4 ${className}`}>
			<label className="block text-gray-700 text-sm font-bold mb-2">
				{label}
			</label>
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type={type}
				placeholder="sol"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
