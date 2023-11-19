import styled from "styled-components";
import AboutComponents from "./AboutComponents/AboutComponents";
import WhatVerseDoes from "./AboutComponents/WhatVerseDoes";
import OurMission from "./AboutComponents/OurMission";
import OurTeam from "./AboutComponents/OurTeam";
import OurPartners from "./AboutComponents/OurPartners";

function About() {
  return (
    <AboutPage>
      <AboutComponents />
      <WhatVerseDoes />
      <OurMission />
      <OurTeam />
      <OurPartners />
    </AboutPage>
  );
}

const AboutPage = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default About;
