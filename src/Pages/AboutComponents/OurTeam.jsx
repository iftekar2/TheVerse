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

        {/* <div className="ourTeamImage">
          <div className="brandonHoward">
            <img
              src="https://media.licdn.com/dms/image/C5603AQHxiETt2zLLIw/profile-displayphoto-shrink_400_400/0/1592431777262?e=1706140800&v=beta&t=igawHYdLWWUhjP5QgA2tH0bs4k1mW86Ey1OT6__eu3U"
              alt="Brandon Howard"
            />

            <div className="brandonHowardDescription">
              <h1>Brandon Howard</h1>
              <p>Founder, Co-Founder</p>
              <p>Platform Director/Health & Wellbeing Innovator</p>
            </div>
          </div>
        </div> */}
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
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 950px) {
        .ourTeamTitle {
          width: 20rem;
          h1 {
            text-align: center;
            margin-bottom: 1rem;
          }
        }
  
        .ourTeamDescription {
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            width: 20rem;
            text-align: center;
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }
        }
  }
`;

export default OurTeam;
