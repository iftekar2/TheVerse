import styled from "styled-components";

function WhatVerseDoes() {
  return (
    <WhatVerseDoesSection>
      <div className="whatVerseDoesContent">
        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/yoga-outdoor-flat-style_24908-57718.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
            alt="People doing Yoga"
          />
        </div>

        <div className="whatVerseDoesTitle">
          <h1>The Verse builds game that playify/gamify wellbeing.</h1>
        </div>

        <div className="whatVerseDoesDescription">
          <p>
            We build game mechanics around mindfulness, meditation-based
            techniques (calm focus, equanimity, compassion), prosociality,
            empathy, and perspective taking. We believe that games have great
            potential to improve our wellbeing/health.
          </p>
        </div>
      </div>
    </WhatVerseDoesSection>
  );
}

const WhatVerseDoesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .whatVerseDoesContent {
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 31rem;
        width: 31rem;
        border-radius: 10px;
        margin-bottom: 3rem;
      }
    }

    .whatVerseDoesTitle {
      text-align: center;
      margin-bottom: 1rem;
    }

    .whatVerseDoesDescription {
      max-width: 50rem;
      text-align: center;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 950px) {
    .whatVerseDoesContent {
      .image {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 20rem;
          width: 20rem;
          border-radius: 10px;
          margin-bottom: 3rem;
        }
      }
    }

    .whatVerseDoesTitle {
      text-align: center;
      width: 20rem;
      h1 {
        font-size: 1.5rem;
      }
    }

    .whatVerseDoesDescription {
      width: 22rem;
      text-align: center;
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
`;

export default WhatVerseDoes;
