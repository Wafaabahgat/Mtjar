import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Login /> Capitalized component
      <BrowserRouter>
        {/* <Login /> Capitalized component */}
        <Routes>
          <Route
            path="../components/Auth/Login.jsx"
            element={<Login />}
          ></Route>
          <Route
            path="../components/Auth/Signup.jsx"
            element={<Signup />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
