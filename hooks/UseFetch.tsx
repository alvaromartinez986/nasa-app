import { useAppContext } from "contexts/AppContext";
import React, {
	useCallback,
	useEffect,
	useState,
} from "react";

const UseFetch = (urlData?: string) => {
	const [data, setData] = useState<unknown>();
	const { rover } = useAppContext();
	const [loading, setLoading] =
		useState<boolean>(true);

	const fetchData = useCallback(
		async (params?: string) => {
			try {
				const url = params || urlData;
				setLoading(true);
				await fetch(
					`${process.env.URL_NASA}/${rover}${url}&api_key=${process.env.API_TOKEN}`
				)
					.then((response: Response) =>
						response.json()
					)
					.then((data: unknown[]) =>
						setData(data)
					);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		},
		[urlData, rover]
	);

	useEffect(() => {
		console.log(process.env.URL_NASA);
		fetchData();
	}, [fetchData]);

	return { data, loading, fetchData };
};

export default UseFetch;
