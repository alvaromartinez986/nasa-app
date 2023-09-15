import { defaultProps } from "@components/types";
import React from "react";

const RadioButton = ({
	value,
	checked = false,
	children,
	onChange,
}: defaultProps & {
	value: string;
	checked: boolean;
	onChange: (
		e: React.FormEvent<HTMLInputElement>
	) => void;
}) => {
	return (
		<div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
			<input
				type="radio"
				name="inlineRadioOptions"
				id="inlineRadio1"
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer">
				{children}
			</label>
		</div>
	);
};

export default RadioButton;
