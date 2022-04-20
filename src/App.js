import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
function App() {
  const [isopen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isopen) {
        setIsopen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggle={toggle} />
        {isopen && <Dropdown toggle={toggle} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
