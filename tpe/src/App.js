import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Education from './pages/Education'
import Formation from './pages/Formation'
import Intervention from './pages/Intervention'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educacion" element={<Education />} />
        <Route path="/formacion" element={<Formation />} />
        <Route path="/intervencion" element={<Intervention />} />
      </Routes>
    </div>
  );
}

export default App;
