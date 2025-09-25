
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";     
import './App.css';
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />          
        <Route path="/signin" element={<SignIn />} />  
      </Routes>
    </Router>
  );
}


export default App;
