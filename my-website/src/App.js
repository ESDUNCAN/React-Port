import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import MyCat from "./pages/MyCat";
import Work from "./pages/Work";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/ESDUNCAN")
      .then((res) => res.json())
      .then((user) => {
        console.log("success");
        setUser(user);
      });
  }, []);
  if (!user) {
    return <div />;
  }

  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/projects" element={<Projects user={user} />} />
        <Route exact path="/" element={<Home user={user} />} />
        <Route exact path="/mycat" element={<MyCat user={user} />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/work" element={<Work user={user} />} />
      </Routes>
    </main>
  );
}
