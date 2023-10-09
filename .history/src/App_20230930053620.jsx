import "./App.css";
import Login from "./components/Auth/Login"; // Capitalized component and correct path
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <>
      <main>
        <Login /> {/* Capitalized component */}
      <Signup/>
      </main>
    </>
  );
}

export default App;
