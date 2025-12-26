import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetail from '../Pages/AppDetail/AppDetail';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErroPage></ErroPage>
    children: [
        {
            index: true,
            path:"/",
            loader: () => fetch('/appsData8.json'),
            Component: Home
        },
        {
            path:"/apps",
            loader: () => fetch('/appsData20.json'),
            Component: Apps
        },
        {
            path:"/installation",
            Component: Installation
        },
        {
            path:"/appDetail/:id",
            loader: () => fetch('/appsData20.json'),
            Component: AppDetail
        },
        {
            path:"*",
            Component: NotFoundPage
        }
    ]
  },
]);