import styled from "styled-components";

function OurPartners() {
  return (
    <OurPartnersSection>
      <div className="ourPartnersContent">
        <div className="ourPartnersTitle">
          <h1>Our Partners and Investors</h1>
        </div>

        <div className="ourPartnersDescription">
          <p>
            We are happy to partner with Our Partners because Our Partners are
            as committed to our cause as much as we are.
          </p>
        </div>

        {/* <div className="ourPartners">
          <div className="partnerOne">
            <h1>8VC</h1>
          </div>

          <div className="partnerTwo">
            <h1>NEA</h1>
          </div>

          <div className="partnerThree">
            <h1>Munich Re</h1>
          </div>

          <div className="partnerFour">
            <h1>NA</h1>
          </div>

          <div className="partnerFive">
            <h1>MORPHEUS</h1>
          </div>

          <div className="partnerSix">
            <h1>Core</h1>
          </div>
        </div> */}
      </div>
    </OurPartnersSection>
  );
}

const OurPartnersSection = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .ourPartnersContent {
    text-align: center;
    .ourPartnersTitle {
      h1 {
        margin-bottom: 0.5rem;
      }
    }

    .ourPartnersDescription {
      p {
        font-size: 1.3rem;
        width: 40rem;
      }
    }

    .ourPartners {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;

      .partnerOne {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
      }

      .partnerTwo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        border-left: 2px solid white;
      }

      .partnerThree {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-bottom: 2px solid white;
        border-left: 2px solid white;
      }

      .partnerFour {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-top: 2px solid white;
        border-right: 2px solid white;
      }

      .partnerFive {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-top: 2px solid white;
        border-right: 2px solid white;
        border-left: 2px solid white;
      }

      .partnerSix {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
        width: 25rem;
        border-top: 2px solid white;
        border-left: 2px solid white;
      }
    }

    .@media (max-width: 950px) {
      .ourPartners {
        width: 20rem;

        .partnerOne {
          width: 20rem;
        }

        .partnerTwo {
          width: 20rem;
        }

        .partnerthree {
          width: 20rem;
        }

        .partnerFour {
          width: 20rem;
        }

        .partnerFive {
          width: 20rem;
        }

        .partnerSix {
          width: 10rem;
        }
      }
    }
  }
`;

export default OurPartners;
