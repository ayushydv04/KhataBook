import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CreateHisaab from "./Components/CreateHisaab";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-hisaab" element={<CreateHisaab />} />
      </Routes>
    </Router>
  );
};

export default App;
