import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import w3 from "./assets/images/w3.png";
import w4 from "./assets/images/w4.png";
import w5 from "./assets/images/w5.png";
import w1 from "./assets/images/w1.png";
import w2 from "./assets/images/w2.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Courses from "./components/courses";
import { Routes, Route, Link } from "react-router-dom";
import WithHeaderFooter from "./components/withHeaderFooter";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>

        <Route element={<WithHeaderFooter/>} >
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
