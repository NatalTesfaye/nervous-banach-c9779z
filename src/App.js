import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import News from "./routes/News";
import MemberShip from "./routes/MemberShip";
import Loginsignup from "./components/LoginSignup";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/memberShip" element={<MemberShip/>} />
        <Route path="/sign up" element={<Loginsignup/>} />
      </Routes>
    </div>
  );
}
