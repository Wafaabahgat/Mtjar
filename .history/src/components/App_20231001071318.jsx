import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <main>
      <Login />
      <Switch>
        <Route path="/signup" Component={Signup} />
      </Switch>
    </main>
  );
}

export default App;
