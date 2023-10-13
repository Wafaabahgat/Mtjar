import { createBrowserRouter } from "react-router-dom";
import ".//index.css";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Forgetpass from "./components/Auth/Forgetpass";
import Resetpass from "./components/Auth/Resetpass";

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
      {
        path: "/forgetpass",
        element: <Forgetpass />,
      },
      {
        path: "/Resetpass",
        element: <Resetpass />,
      },
    ],
  },
]);
export default router;
