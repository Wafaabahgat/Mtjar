import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      <Login />
      <BrowserRouter>
        {/* <Link to="/signup">Sign Up</Link> */}
        <switch>
          <Route path="/signup" exact element={<Signup />}></Route>
        </switch>
      </BrowserRouter>
    </>
  );
}

export default App;
