import React from "react";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function WhatIsVerse() {
  return (
    <WhatIsVerseSection>
      <div className="WhatIsVerseSectionContent">
        <Question>
          <div className="titleAndDescription">
            <h1>What is The Verse?</h1>
            <p>
              The Verse attracts and connects clinicians/academics,
              makers/builders, artists, visionaries…
            </p>
          </div>
        </Question>

        <WhatIsVerseComponents>
          <div className="firstComponent">
            <Icon>
              <BsFillClockFill className="clock" />
            </Icon>
            <Description>
              <p>
                Highly educated and intelligent people that are not looking for
                a “job”. They are looking to develop, express and grow.
              </p>
            </Description>
          </div>

          <div className="secondComponent">
            <Icon>
              <BsBank2 className="bank" />
            </Icon>
            <Description>
              <p>
                The “dissatisfied and disillusioned” - those who have worked on
                Wall Street, in big tech and big media.
              </p>
            </Description>
          </div>

          <div className="thirdComponent">
            <Icon>
              <FaBookOpen className="book" />
            </Icon>
            <Description>
              <p>
                Grad students (MAs and PhDs) wanting to do more with their
                training and aspirations. And Gen Z’s/Undergraduates looking for
                purpose and meaning.
              </p>
            </Description>
          </div>

          <div className="forthComponent">
            <Icon>
              <FaHeart className="heart" />
            </Icon>
            <Description>
              <p>
                Academics and Clinicians, looking for real world applications
                for their work.
              </p>
            </Description>
          </div>
        </WhatIsVerseComponents>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    width: 40rem;
  }

  @media (max-width: 950px) {
    h1,
    p {
      width: 20rem;
    }
  }
`;

const WhatIsVerseComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;

  .firstComponent {
    width: 40rem;
  }

  .secondComponent {
    width: 40rem;
  }

  .thirdComponent {
    width: 40rem;
  }

  .forthComponent {
    width: 40rem;
    height: 9.5rem;
  }

  @media (max-width: 950px) {
    .firstComponent {
      width: 20rem;
    }

    .secondComponent {
      width: 20rem;
    }

    .thirdComponent {
      width: 20rem;
    }

    .forthComponent {
      width: 20rem;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the start (top) of the container */
  text-align: center;
  margin-bottom: 1rem;

  .clock,
  .bank,
  .book,
  .heart {
    font-size: 3rem;
    background-color: #0d6efd;
    padding: 8px;
    border-radius: 2px;
    color: white;
  }
`;

const Description = styled.div`
  p {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default WhatIsVerse;
