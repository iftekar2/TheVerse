import styled from "styled-components";

function AboutComponents() {
  return (
    <AboutComponentsSection>
      <div className="aboutPageTitle">
        <h1>Hello, We are The Verse</h1>
      </div>
      <div className="aboutPageImage">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7213/7213357.png"
          alt="Paper Airplane"
        />
      </div>
    </AboutComponentsSection>
  );
}

const AboutComponentsSection = styled.div`
  height: 44rem;
  max-width: 1560px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: white;

  .aboutPageTitle {
    font-size: 2rem;
  }

  .aboutPageImage {
    img {
      width: 30rem;
      height: 30rem;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;

    .aboutPageTitle {
      font-size: 1rem;
    }

    .aboutPageImage {
      img {
        width: 20rem;
        height: 20rem;
      }
    }
  }
`;

export default AboutComponents;
