import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomeScreen } from './Main/HomeScreen';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Studio } from './Studio/Studio';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />,
    },
    {
        path: '/studio',
        element: <Studio />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
