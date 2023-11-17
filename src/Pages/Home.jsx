import React from "react";
import styled from "styled-components";
import HomeComponents from "./HomeComponents/HomeComponent";
import ProjectsInVerse from "./HomeComponents/ProjectsInVerse";
import Quote from "./HomeComponents/Quote";
import WhatIsVerse from "./HomeComponents/WhatIsVerse";
import SignUp from "./HomeComponents/SignUp";

function Home() {
  return (
    <HomePage>
      <HomeComponents />
      <ProjectsInVerse />
      <Quote />
      <WhatIsVerse />
      <SignUp />
    </HomePage>
  );
}

const HomePage = styled.div`
  margin: 0 2rem;
`;

export default Home;
