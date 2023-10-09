import "./App.css";
import Login from "./components/Auth/Login"; // Capitalized component and correct path

function App() {
  return (
    <>
      <main>
        <Login /> {/* Capitalized component */}
        <signUp></signUp>
      </main>
    </>
  );
}

export default App;
