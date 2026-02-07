import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
import Pricing from "./components/Pricing";
import Shop from "./Shop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
