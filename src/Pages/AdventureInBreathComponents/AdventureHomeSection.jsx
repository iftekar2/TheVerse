import styled from "styled-components";

function AdventureHomeSection() {
  return (
    <AdventureSection>
      <div className="karmaConents">
        <AdventurePageTitle>
          <h1>Adventure in Breath</h1>
          <p>Gamified breathing practices to reduce stress and anxiety.</p>
        </AdventurePageTitle>

        <AdventureLearnMore>
          <button>Learn more on Notion</button>
        </AdventureLearnMore>
      </div>
    </AdventureSection>
  );
}

const AdventureSection = styled.div`
  height: 44rem;
  max-width: 1560px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: white;
  background-image: url("https://img.freepik.com/free-vector/chakras-mystical-concept_23-2148565885.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph");
  background-size: cover;
  background-position: center;
`;

const AdventurePageTitle = styled.div`
  color: white;
  h1 {
    font-size: 6rem;
    text-align: center;
  }

  p {
    font-size: 3rem;
  }

  @media (max-width: 950px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
      color: white;
    }
  }
`;

const AdventureLearnMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  button {
    width: 25rem;
    background: #3e2bb9;
    color: white;
    font-size: 2rem;
    height: 4rem;
    border: none;
  }

  @media (max-width: 950px) {
    button {
      width: 18rem;
      font-size: 1.5rem;
    }
  }
`;

export default AdventureHomeSection;
