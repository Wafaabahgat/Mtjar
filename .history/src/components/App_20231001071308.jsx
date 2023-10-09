import "./App.css";
import {  Route, Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <main>
      <Login />
<Switch></Switch>
      <Route path="/signup" Component={Signup} />
    </main>
  );
}

export default App;
