import "./App.css";
import Login from "../components/Auth/Login"; // Capitalized component and correct path
import { BrowserRouter , Router, Route, Link } from "react-router-dom";
// import Signup from "../components/Auth/Signup";
import Signup from "../components/Auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> Capitalized component */}
        <Routes>
          <Swicth>
            <Route path="../components/Auth/Signup.jsx" Component={Signup}>
              <Signup />
            </Route>
          </Swicth>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
