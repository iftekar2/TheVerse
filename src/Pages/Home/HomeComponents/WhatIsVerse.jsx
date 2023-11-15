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

const WhatIsVerseSection = styled.div``;

const Question = styled.div``;

export default WhatIsVerse;
