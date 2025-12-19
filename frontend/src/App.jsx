import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useAppData } from "./hooks/useAppData";
import Home from "./page/Home";
import Admin from "./admin/Admin";

function App() {
  const appData = useAppData();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home {...appData} />} />
        <Route path="/admin" element={<Admin {...appData} />} />
      </Routes>
    </Router>
  );
}

export default App;
