import "./App.css";
import Login from "../components/Auth/Login"; // Capitalized component and correct path
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Signup from "../components/Auth/Signup";
import Signup from "../components/Auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> Capitalized component */}
        <Routes>
          <Route path="/" Component={L}>
            <Signup />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
