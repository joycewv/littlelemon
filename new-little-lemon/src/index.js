import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Menu from './components/pages/menu'
import AboutPage from './components/pages/AboutPage';
import OrderPage from './components/pages/OrderPage';
import LoginPage from './components/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "orderonlines",
    element: <OrderPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
