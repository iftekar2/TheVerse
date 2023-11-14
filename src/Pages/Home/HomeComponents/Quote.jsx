import styled from "styled-components";

function Quote() {
  return (
    <QuoteSection>
      <div className="quote">
        <p>
          "Every Person Has A Gift To Give. The Verse makes it easier for each
          person to find and use their passion/purpose/gift in a meaningful
          way."
        </p>
        <h4>Chris D. / In The Verse Team</h4>
      </div>
    </QuoteSection>
  );
}

const QuoteSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10rem;

  div {
    width: 40rem;
    text-align: center;

    p {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;

export default Quote;
