import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
// import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
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
        {/* <Route exact path="/experience" element={<Experience user={user} />} /> */}
        <Route exact path="/" element={<Home user={user} />} />
        <Route exact path="/projects" element={<Projects user={user} />} />
        <Route path="*" element={<Navigate to="/experience" />} />
        <Route exact path="/education" element={<Education user={user} />} />
      </Routes>
    </main>
  );
}
