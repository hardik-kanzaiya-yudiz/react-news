import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/business",
    element: <App category='business' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/entertainment",
    element: <App category='entertainment' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/general",
    element: <App category='general' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/health",
    element: <App category='health' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/science",
    element: <App category='science' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sports",
    element: <App category='sports' />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/technology",
    element: <App category='technology' />,
    errorElement: <ErrorPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
