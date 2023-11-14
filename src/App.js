import styled from "styled-components";
import Home from "./Pages/Home/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <AppPage>
      <Navbar />
      <Home />
      <Footer />
    </AppPage>
  );
}

const AppPage = styled.div`
  background-color: #212529;
`;

export default App;
