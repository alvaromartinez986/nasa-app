import Navbar from "@components/Navbar/Navbar";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
