import Filter from "@components/Filter/Filter";
import DatePickerCustom from "@components/FormComponents/DatePickerCustom";
import Input from "@components/FormComponents/Input";
import RadioButton from "@components/FormComponents/RadioButton";
import React, {
	useState,
	useEffect,
} from "react";

const cameras: string[] = [
	"FHAZ",
	"RHAZ",
	"MAST",
	"CHEMCAM",
	"MAHLI",
	"MARDI",
	"NAVCAM",
	"PANCAM",
	"MINITES",
];

const dateFormat = (date: Date) => {
	return (
		date?.getFullYear() +
		"-" +
		(date?.getMonth() + 1) +
		"-" +
		date?.getDate()
	);
};

const FilterPhotos = ({
	setFilter,
}: {
	setFilter: (x: string) => void;
}) => {
	const [cameraFilter, setCameraFilter] =
		useState("");
	const [dateEarth, setDateEarth] = useState(
		dateFormat(new Date())
	);
	const [sun, setSun] = useState(0);

	const onChangeCamera = (
		e: React.FormEvent<HTMLInputElement>
	) => {
		const value = e.currentTarget.value;
		setCameraFilter(value);
	};

	const handleDateChange = (date: Date) => {
		setDateEarth(dateFormat(date));
	};

	const onChangeSun = (
		e: React.FormEvent<HTMLInputElement>
	) => {
		const value: number = +e.currentTarget.value;
		setSun(value);
	};

	useEffect(() => {
		if (cameraFilter !== "")
			setFilter(
				`&camera=${cameraFilter}&sol=${
					sun > 0 ? sun : "1000"
				}`
			);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cameraFilter, setFilter]);

	useEffect(() => {
		if (sun !== 0) {
			setFilter(`&sol=${sun}`);
		}
	}, [sun, setFilter]);

	useEffect(() => {
		if (
			dateEarth !== "" &&
			dateEarth !== "01/01/2012"
		)
			setFilter(`&earth_date=${dateEarth}`);
	}, [dateEarth, setFilter]);

	return (
		<Filter className="w-1/5 mt-5">
			<div>
				{cameras.map((camera: string) => (
					<RadioButton
						key={camera}
						value={camera}
						checked={camera === cameraFilter}
						onChange={onChangeCamera}
					>
						{camera}
					</RadioButton>
				))}
			</div>
			<DatePickerCustom
				selected={dateEarth || "01/01/2012"}
				className="mt-5 ml-6"
				label="Earth Date"
				onChange={handleDateChange}
			/>
			<Input
				className="w-1/2 ml-6 mt-5"
				type="number"
				label="Solar"
				value={sun}
				onChange={onChangeSun}
			/>
		</Filter>
	);
};

export default FilterPhotos;
