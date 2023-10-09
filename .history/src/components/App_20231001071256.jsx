import "./App.css";
import { BrowserRouter, , Route, Link, Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <main>
      <Login />

      <Route path="/signup" Component={Signup} />
    </main>
  );
}

export default App;
