import { createBrowserRouter } from "react-router-dom";
import ".//index.css";
import "./App.css"
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Auth/ho";
import Root from "./pages/Root";

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
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
export default router;
