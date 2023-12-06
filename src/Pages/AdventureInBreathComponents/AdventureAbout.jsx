import styled from "styled-components";
import AdventureBuildInOpen from "./AdventureBuildInOpen";

function AdventureAbout() {
  return (
    <AdventureAboutSection>
      <div className="AdventureAboutContent">
        <AdventureAboutTitle>
          <h2>Adventures In Breath (AiB): Games That Make Your Breath.</h2>
        </AdventureAboutTitle>

        <AdventureAboutDescription>
          <p>
            AiB is an ecosystem of games that gamify and playify therapeutic
            breath practices to reduce stress and anxiety, and improve health
            outcomes. Each breath mechanic ties to a scientifically validated
            breath therapeutic, and is expressed within the game through
            interactivity mechanics/responsive design.
          </p>

          <img
            src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=ais"
            alt="Breathing"
          />
        </AdventureAboutDescription>

        <AdventureBuildInOpen />
      </div>
    </AdventureAboutSection>
  );
}

const AdventureAboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const AdventureAboutTitle = styled.div`
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

const AdventureAboutDescription = styled.div`
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
    height: 25rem;
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

export default AdventureAbout;
