import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import home from "./components/home.jsx";
function App(){
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/about" element={<home />} /> 
    </Routes>
  </Router>
  </div>
  );
}

export default App;