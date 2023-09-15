import Layout from "components/Layout/Layout";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { AppProvider } from "./contexts/AppContext";

export default function MyApp({
	Component,
	pageProps,
}: AppProps) {
	return (
		<AppProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppProvider>
	);
}
