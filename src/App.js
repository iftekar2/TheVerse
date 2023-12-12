import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Karma from "./Pages/Karma";
import AdventureInBreath from "./Pages/AdventureInBreath";
import WalkXR from "./Pages/WalkXR";

function App() {
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate("/");
  };

  return (
    <AppPage>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home onClick={redirectToMainPage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karma" element={<Karma />} />
        <Route path="/adventureInBreath" element={<AdventureInBreath />} />
        <Route path="/walkXR" element={<WalkXR />} />
      </Routes>
      <Footer />
    </AppPage>
  );
}

const AppPage = styled.div`
  background: #212529;
`;

export default App;
