import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/";
import Signup from "./Auth/Signup";
import Root from "../Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
