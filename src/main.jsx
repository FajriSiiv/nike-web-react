import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailProduct from "./section/DetailProduct.jsx";
import NotFound from "./components/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <Layout>
        <DetailProduct />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
