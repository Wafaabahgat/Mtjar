import { createBrowserRouter } from "react-router-dom";
import "./";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Root from "./Pages/Root";

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
