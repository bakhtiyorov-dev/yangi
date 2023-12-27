import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from "@/components/layout";
import AuthContextProvider from "@/components/context/auth.context";

export default function App({ Component, pageProps }: AppProps) {
	return (
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
	);
}
