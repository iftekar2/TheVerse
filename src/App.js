import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const navigate = useNavigate();

  // Function to handle redirection from Home to the main page
  const redirectToMainPage = () => {
    navigate("/");
  };

  return (
    <AppPage>
      <Navbar />
      <Routes>
        {/* Update the path for the home route */}
        <Route path="*" element={<Home onClick={redirectToMainPage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </AppPage>
  );
}

const AppPage = styled.div`
  background: #212529;
`;

export default App;
