import React from "react";
import ReactDOM from "react-dom/client";
import "./components/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
