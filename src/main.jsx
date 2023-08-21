import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import CartProductsLoader from "./CartProductsLoader/CartProductsLoader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>,
            },
            {
                path: "/orders",
                element: <Orders></Orders>,
                loader: CartProductsLoader,
            },
            {
                path: "/inventory",
                element: <Inventory></Inventory>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
