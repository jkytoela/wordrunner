import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Meta from '@/components/meta';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			disableTransitionOnChange
			attribute="class"
			defaultTheme="dark"
			enableSystem={true}
		>
			<Meta />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
