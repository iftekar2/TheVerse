import styled from "styled-components";
import WalkXRBuildInOpen from "./WalkXRBuildInOpen";

function KarmaAbout() {
  return (
    <KarmaAboutSection>
      <div className="karmaAboutContent">
        <KarmaAboutTitle>
          {/* <h2>Karma The Six Realm Game: Gamifing prosociality. </h2> */}
        </KarmaAboutTitle>

        <KarmaAboutDescription>
          <p>
            A multi media social therapeutic that provides our community with
            the ability to "walk" through the experiences of others. WalkXR
            provides digital experiences that promote empathy, perspective
            taking, and socialization. We explore: What does grief look like?
            What does hope look like? What does forgiveness look like? What does
            awe look like? What does building look like?
          </p>

          <img
            src="https://img.freepik.com/free-vector/breathing-exercise-concept-illustration_114360-9070.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
            alt="Karma"
          />
        </KarmaAboutDescription>

        <WalkXRBuildInOpen />
      </div>
    </KarmaAboutSection>
  );
}

const KarmaAboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const KarmaAboutTitle = styled.div`
  color: white;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 950px) {
    h2 {
      text-align: center;
    }
  }
`;

const KarmaAboutDescription = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    width: 38rem;
    color: white;
    font-size: 1.3rem;
  }

  img {
    width: 30rem;
    border-radius: 2px;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
      width: 20rem;
      text-align: center;
    }

    img {
      width: 22rem;
    }
  }
`;

export default KarmaAbout;
