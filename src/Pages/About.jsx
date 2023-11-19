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

const AboutPage = styled.div``;

export default About;
