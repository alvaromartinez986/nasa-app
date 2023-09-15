import { defaultProps } from "@components/types";
import React, { useState } from "react";

const AppContext = React.createContext({
	rover: "",
	setRover: (x: string) => {},
});

const AppProvider = ({
	children,
}: defaultProps) => {
	const [rover, setRover] = useState("curiosity");
	const selectedStateObj: {
		rover: string;
		setRover: (x: string) => void;
	} = {
		rover,
		setRover,
	};

	return (
		<AppContext.Provider value={selectedStateObj}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = React.useContext(AppContext);
	if (context === undefined) {
		throw new Error(
			"AppContext must be used within an AppContext"
		);
	}
	return context;
};

export { AppContext, AppProvider, useAppContext };
