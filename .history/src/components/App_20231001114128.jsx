import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
const router=createBrowserRouter([
  {
    path="/"
    Element: <></>,
    children:[
      {index:true,
      path="/",
      element:<
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

export default App;
