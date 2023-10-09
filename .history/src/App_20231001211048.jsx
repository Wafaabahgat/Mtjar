import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        in
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
