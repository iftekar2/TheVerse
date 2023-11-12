import styled from "styled-components";

function HomeComponents() {
  return (
    <StyledHomeComponents>
      <HomePageTitle>
        <h1>A Digital Wellbeing Ecosystem</h1>
        <p>Aligning Passion, Purpose, and Impact. We create games and digital experiences that shift health and consciousness. </p>
      </HomePageTitle>
      <HomePageImage>
        <img src="https://versebuilding.com/assets/header%20image.png" alt="Home Page Image"/>
      </HomePageImage>
    </StyledHomeComponents>
  );
}

const StyledHomeComponents = styled.div`
  @media (max-width: 1520px) {
    height: 46.8rem;
    max-width: 1560px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem; 
    color: white; 
  }

  @media (max-width: 950px) {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
  }
`;

const HomePageTitle = styled.div`
  @media (max-width: 1520px) {
    h1 {
      font-size: 3rem;
      text-align: center; 
      margin-bottom: 2rem; 
    }

    p {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  @media (max-width: 950px) {
    h1 {
      font-size: 2rem;
      margin: 0rem;
      text-align: center; 
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.5rem;
      text-align: center; 
      margin: 0rem;
    }
  }
`;

const HomePageImage = styled.div`
  @media (max-width: 1512px) {
    img {
      height: 22.1rem;
      width: 36.8rem;
      border-radius: 5px; 
    }
  }

  @media (max-width: 950px) {
    img {
      height: 13rem;
      width: 20rem;
      border-radius: 5px; 
    }
  }
`;

export default HomeComponents;
