import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Forgetpass from "./pages/Auth/Forgetpass";
import Resetpass from "./pages/Auth/Resetpass";
import AuthUser from "./middleware/AuthUser";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      ////////////////// Auth //////////////////
      {
        path: "/login",
        element: (
          <AuthUser>
            <Login />
          </AuthUser>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthUser>
            <Signup />
          </AuthUser>
        ),
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
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
