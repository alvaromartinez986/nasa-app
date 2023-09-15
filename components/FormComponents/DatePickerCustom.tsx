import { defaultProps } from "@components/types";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCustom = ({
	label,
	className,
	onChange,
	selected,
}: defaultProps & {
	selected: string;
	label: string;
	onChange: (date: Date) => void;
}) => {
	return (
		<div className={className}>
			<DatePicker
				showIcon
				className="border-2 rounded  w-44 border-gray-200"
				onChange={onChange}
				selected={new Date(selected)}
			/>
			<span className="ml-2">{label}</span>
		</div>
	);
};

export default DatePickerCustom;
