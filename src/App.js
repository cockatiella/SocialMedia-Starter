import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <div className="blur" style={{ bottom: "6%", right: "2rem" }}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Auth />} />
      </Routes>

    </div>
  
  );
}

export default App;
