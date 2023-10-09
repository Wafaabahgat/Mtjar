import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <></>,
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
<Na

// const App = () => {
//   return (
//     <>
//       <Login />

//     </>
//   );
// };

export default router;
