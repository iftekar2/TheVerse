import styled from "styled-components";
import KarmaHomeSection from "./ProjectComponents/KarmaHomeSection";
import KarmaAbout from "./ProjectComponents/KarmaAbout";

function Karma() {
  return (
    <KarmaPage>
      <KarmaHomeSection />
      <KarmaAbout />
    </KarmaPage>
  );
}

const KarmaPage = styled.div``;

export default Karma;
