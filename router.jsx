/** @format */

import { createBrowserRouter } from "react-router-dom";
import Home from "./public/pages/Home";
import Second from "./public/pages/Second";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Cat",
    element: <Second />,
  },
]);

export default router;
