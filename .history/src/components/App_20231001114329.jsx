import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";

const router =createBrowserRouter([
  {
    path:"/",
    Element: <></>,
    children:[
      {
      path:"/lo",
      element:<Login/>
      }
    ]
  }
])

// const App = () => {
//   return (
//     <>
//       <Login />
    
//     </>
//   );
// };

export default router;
