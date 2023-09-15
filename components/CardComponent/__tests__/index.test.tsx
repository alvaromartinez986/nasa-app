import {
	render,
	screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CardComponent from "../CardComponent";

describe("Card Component", () => {
	it("renders a card component", () => {
		render(
			<CardComponent
				img_src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
				title="title"
				description="test"
			/>
		);

		const card = screen.getByText("title");

		expect(card).toBeInTheDocument();
	});
});
