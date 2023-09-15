import {
	render,
	screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import GridComponentPaginator from "../GridComponentPaginator";

describe("Grid Component paginator", () => {
	it("renders a card component", () => {
		render(
			<GridComponentPaginator
				page={1}
				setPage={jest.fn()}
				className=""
			/>
		);

		const card = screen.getByText("Page : 1");

		expect(card).toBeInTheDocument();
	});
});
