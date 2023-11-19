import styled from "styled-components";

function OurTeam() {
  return (
    <OurTeamSection>
      <div className="ourTeamContent">
        <div className="ourTeamTitle">
          <h1>Our Team</h1>
        </div>

        <div className="ourTeamDescription">
          <p>
            We are NOW 50+ people actively contributing from around the world.
            Undergraduates who feel that the world needs CHANGING! Graduate
            students (MAs & PhDs) who want to use their expertise to affect
            CHANGE! Clinicians/Academics who want their work to move behind
            their silos. …people exploring new careers, shifting out of industry
            (tech/health/media)
          </p>
        </div>
      </div>
    </OurTeamSection>
  );
}

const OurTeamSection = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .ourTeamContent {
    .ourTeamTitle {
      h1 {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

    .ourTeamDescription {
      text-align: center;

      p {
        width: 52rem;
        font-size: 1.3rem;
      }
    }
  }
`;

export default OurTeam;
