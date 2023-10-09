import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route
            path="/src"
            element={<Signup />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
