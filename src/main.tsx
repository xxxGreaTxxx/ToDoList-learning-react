import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</Provider>
	</React.StrictMode>
);
