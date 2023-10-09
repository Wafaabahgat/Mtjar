import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <main>
      <Login />
      <BrowserRouter>
        <Route path="/signun" Component={Signup} />
      </BrowserRouter>
    </main>
  );
}

export default App;
