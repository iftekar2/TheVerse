import React from "react";
import styled from "styled-components";

function WhatIsVerse() {
  return (
    <WhatIsVerseSection>
      <Question>
        <h1>What is The Verse?</h1>
        <p>
          The Verse attracts and connects clinicians/academics, makers/builders,
          artists, visionaries…
        </p>
      </Question>
    </WhatIsVerseSection>
  );
}

const WhatIsVerseSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Question = styled.div`
  width: 40rem;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default WhatIsVerse;
