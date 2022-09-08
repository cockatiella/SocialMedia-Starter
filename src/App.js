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
      <div className="blur" style={{ bottom: "6%", left: "2rem" }}></div>
      <div className="blur" style={{ bottom: "66%", right: "1rem" }}></div>
      <div className="blur" style={{ bottom: "1%", right: "2rem" }}></div>
      <div className="blur" style={{ bottom: "1%", left: "2rem" }}></div>
      <div className="blur" style={{ bottom: "66%", left: "20" }}></div>
      <div className="blur" style={{ bottom: "88%", left: "10px" }}></div>
      <div className="blur" style={{ bottom: "8%", right: "2rem" }}></div>
      <div className="blur" style={{ bottom: "50%", right: "20rem" }}></div>
      <div className="blur" style={{ top: "20%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "120%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "180%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "220%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "250%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "300%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "320%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "400%", right: "2rem" }}></div>
      <div className="blur" style={{ top: "120%", left: "1.5rem" }}></div>
      <div className="blur" style={{ top: "190%", left: "2rem" }}></div>
      <div className="blur" style={{ top: "180%", left: "1rem" }}></div>
      <div className="blur" style={{ top: "250%", left: "0.5rem" }}></div>
      <div className="blur" style={{ top: "300%", left: "3rem" }}></div>
      
     
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Auth />} />
      </Routes>

    </div>
  
  );
}

export default App;
