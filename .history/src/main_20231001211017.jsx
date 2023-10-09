import React from "react";
import ReactDOM from "react-dom/client";
import ".//";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
