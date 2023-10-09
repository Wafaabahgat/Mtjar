import "./App.css";
import Login from "../components/Auth/Login"; // Capitalized component and correct path
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <main>
        <Login /> {/* Capitalized component */}
        <Router>
          
        </Router>
      </main>
    </>
  );
}

export default App;
