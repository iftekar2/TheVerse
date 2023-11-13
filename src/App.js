import styled from "styled-components";
import Home from "./Pages/Home/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <AppPage>
      <Navbar />
      <Home />
    </AppPage>
  );
}

const AppPage = styled.div`
  background-color: #212529;
`;

export default App;
