//import Nav from "../Components/Nav";
import styled from "styled-components";
import HomeComponent from "../Components/HomeComponent";
// import FAQ from "../Components/FAQ";
// import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="HomePage">
      <HomePage>
        <HomeComponent />
      </HomePage>
    </div>
  );
}

const HomePage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;