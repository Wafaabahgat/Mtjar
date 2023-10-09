import "./App.css";
import { BrowserRouter, Routes, Route, Link,Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <Login />

          <Route path="/signup" exact element={Signup}></Route>
   
      </BrowserRouter>
    </>
  );
}

export default App;
