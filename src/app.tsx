import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import Products from "./pages/products";
import Product from "./pages/[product]";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "/products/:id",
            element: <Product />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
