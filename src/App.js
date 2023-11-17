import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <AppPage>
      <Navbar />
      <Routes>
        <Route path=":home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </AppPage>
  );
}

const AppPage = styled.div`
  background: #212529;
`;

export default App;
