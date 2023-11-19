import styled from "styled-components";
import AboutComponents from "./AboutComponents/AboutComponents";
import WhatVerseDoes from "./AboutComponents/WhatVerseDoes";

function About() {
  return (
    <AboutPage>
      <AboutComponents />
      <WhatVerseDoes />
    </AboutPage>
  );
}

const AboutPage = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default About;
