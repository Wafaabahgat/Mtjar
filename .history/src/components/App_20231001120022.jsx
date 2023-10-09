import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Root from ""

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

// const App = () => {
//   return (
//     <>
//       <Login />

//     </>
//   );
// };

export default router;
