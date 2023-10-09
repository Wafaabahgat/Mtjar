import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

const App=() {
  return (
    <>
      <Login />
      <Switch>
        <Route path="/signup" Component={Signup} />
      </Switch>
    </>
  );
}

export default App;
