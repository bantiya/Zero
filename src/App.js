import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import Account from "./views/Account";
import "./App.css";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
