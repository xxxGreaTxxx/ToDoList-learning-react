import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import type { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';
import { HelmetProvider } from 'react-helmet-async';

const todos: ToDo[] = [
	{
		id: 0,
		text: 'Первое задание',
		isDone: false
	},
	{
		id: 1,
		text: 'Второе задание',
		isDone: true
	},
	{
		id: 2,
		text: 'Третье задание',
		isDone: false
	},
	{
		id: 3,
		text: 'Четвертое задание',
		isDone: true
	},
];

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <HomePage todos={todos} />
			},
			{
				path: '/todo',
				element: <ToDoListPage />
			},
			{
				path: '/list/:id',
				element: <ItemDescription todos={todos} />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
], { basename: '/' });

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</React.StrictMode>
);
