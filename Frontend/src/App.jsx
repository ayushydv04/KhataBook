import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import CreateHisaab from "./Components/CreateHisaab";
import { ThemeProvider } from "./context/ThemeContext";
import Collaborative from "./pages/Collaborative";
import ToPay from "./pages/ToPay";
import { ToastContainer } from "react-toastify";


const App = () => {


  return (
    <ThemeProvider>

      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-hisaab" element={<CreateHisaab />} />
          <Route path="/collaborative" element={<Collaborative />} />
          <Route path="/ToPay" element={<ToPay />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
