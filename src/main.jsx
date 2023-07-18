import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx';
import Clubs from './pages/Clubs/Clubs';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import MainLayout from './pages/MainLayout/MainLayout';
import Contact from './pages/Contact/Contact';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/clubs',
                element: <Clubs />
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/main',
        element: <MainLayout />,
        children: [
            {
                path: '/main/login',
                element: <Login />
            },
            {
                path: '/main/register',
                element: <Registration />
            },
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
