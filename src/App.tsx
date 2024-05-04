import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactUs, HomePage } from "./pages/index";

import Header from "./components/Header";
import { Footer } from "./components";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
