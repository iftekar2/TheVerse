import styled from "styled-components";
import HomeComponents from "./HomeComponents/HomeComponent";
import ProjectsInVerse from "./HomeComponents/ProjectsInVerse";
import Quote from "./HomeComponents/Quote";
import WhatIsVerse from "./HomeComponents/WhatIsVerse";

function Home() {
  return (
    <div className="HomePage">
      <HomePage>
        <HomeComponents />
        <ProjectsInVerse />
        <Quote />
        <WhatIsVerse />
      </HomePage>
    </div>
  );
}

const HomePage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;
