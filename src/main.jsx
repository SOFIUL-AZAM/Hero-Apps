import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import InstallProvider from './Context/Context.jsx';
import LoaderProvider from './Context/LoaderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallProvider>
      <LoaderProvider>
        <RouterProvider router={router} />
      </LoaderProvider>
    </InstallProvider>
  </StrictMode>,
)
