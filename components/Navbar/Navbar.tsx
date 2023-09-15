import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button/Button";
import { useAppContext } from "contexts/AppContext";

const rovers: string[] = [
	"curiosity",
	"spirit",
	"opportunity",
];

export default function Navbar() {
	const { setRover, rover } = useAppContext();
	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
				<Link href="#">
					<Image
						className="h-16 w-auto"
						src="/nasaLogo.png"
						alt="nasa"
						width="180"
						height="90"
					/>
				</Link>
				{rovers.map((roverName: string) => (
					<Button
						key={roverName}
						className={
							rover === roverName
								? "bg-gray-500"
								: ""
						}
						onClick={() => setRover(roverName)}
					>
						{roverName}
					</Button>
				))}

				<h1 className="text-3xl">
					Mars Rovers Vehicles
				</h1>
			</nav>
		</header>
	);
}
