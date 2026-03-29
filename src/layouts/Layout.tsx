import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Helmet } from 'react-helmet-async';
import { GlobalStyle } from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const Layout = () => {
	const theme = useSelector((state: RootState) => state.themeReducer.theme);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Helmet>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
				</Helmet>
				<GlobalStyle />
				<Header />
				<Outlet />
			</ThemeProvider>
		</>
	);
}