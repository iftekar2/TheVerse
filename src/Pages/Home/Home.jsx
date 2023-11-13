import styled from "styled-components";
import HomeComponents from "./HomeComponents/HomeComponent";
import ProjectsInVerse from "./HomeComponents/ProjectsInVerse";

function Home() {
  return (
    <div className="HomePage">
      <HomePage>
        <HomeComponents />
        <ProjectsInVerse />
      </HomePage>
    </div>
  );
}

const HomePage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;