import React from "react";
import styled from "styled-components";

function KarmaHomeSection() {
  return (
    <KarmaSection>
      <div className="karmaConents">
        <KarmaPageTitle>
          <h1>Welcome to Karma</h1>
          <p>Gamified Pro-Sociality to Impact Wellbeing.</p>
        </KarmaPageTitle>

        <KarmaLearnMore>
          <button>Learn more on Notion</button>
        </KarmaLearnMore>
      </div>
    </KarmaSection>
  );
}

const KarmaSection = styled.div`
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

const KarmaPageTitle = styled.div`
  h1 {
    font-size: 6rem;
  }

  p {
    font-size: 3rem;
    color: #ccccd5;
  }
`;

const KarmaLearnMore = styled.div`
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
`;

export default KarmaHomeSection;
