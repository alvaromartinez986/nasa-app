import React, { useState } from "react";
import { Photo } from "interfaces";
import UseFetch from "hooks/UseFetch";
import CardComponent from "@components/CardComponent/CardComponent";
import GridComponentPaginator from "@components/GridComponent/GridComponentPaginator";
import Loading from "@components/Loading/Loading";
import FilterPhotos from "./components/FilterPhotos";

type Photos = {
	photos: Photo[];
};

const HomePage = () => {
	const [page, setPage] = useState<number>(1);
	const [filters, setFilter] =
		useState<string>("&sol=1000");
	const { data, loading } = UseFetch(
		`/photos?&page=${page}${filters}`
	);

	return (
		<div>
			<div className="flex m-0 ">
				<FilterPhotos setFilter={setFilter} />
				{loading ? (
					<Loading />
				) : (
					<PhotosGrid
						page={page}
						setPage={setPage}
						data={data}
					/>
				)}
			</div>
		</div>
	);
};

const PhotosGrid = ({
	data,
	page,
	setPage,
}: {
	data: unknown;
	page: number;
	setPage: (x: number) => void;
}) => {
	return (
		<GridComponentPaginator
			className="mb-20 w-4/5"
			page={page}
			setPage={setPage}
		>
			{(data as Photos)?.photos.map(
				(photo: Photo) => (
					<CardComponent
						img_src={photo.img_src}
						title={photo.camera.name}
						description={photo.earth_date}
						key={photo.id}
					/>
				)
			)}
		</GridComponentPaginator>
	);
};

export default HomePage;
