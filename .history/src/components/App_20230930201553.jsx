import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route
            path="/src/components/Auth/Signup.jsx"
            element={<Signup />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
