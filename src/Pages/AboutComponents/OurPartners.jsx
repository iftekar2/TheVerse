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
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    // .ourPartners {
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: center;
    //   align-items: center;
    //   margin-top: 4rem;

    //   .partnerOne {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-bottom: 2px solid red;
    //       border-right: 2px solid red;
    //     }
    //   }

    //   .partnerTwo {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-bottom: 2px solid red;
    //       border-right: 2px solid red;
    //       border-left: 2px solid red;
    //     }
    //   }

    //   .partnerThree {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-bottom: 2px solid red;
    //       border-left: 2px solid red;
    //     }
    //   }

    //   .partnerFour {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-top: 2px solid red;
    //       border-right: 2px solid red;
    //     }
    //   }

    //   .partnerFive {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-top: 2px solid red;
    //       border-right: 2px solid red;
    //       border-left: 2px solid red;
    //     }
    //   }

    //   .partnerSix {
    //     h1 {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       height: 20rem;
    //       width: 25rem;
    //       border-top: 2px solid red;
    //       border-left: 2px solid red;
    //     }
    //   }
    // }

    // @media (max-width: 950px) {
    //   .ourPartners {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     margin-top: 4rem;

    //     .partnerOne {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //         border-bottom: 2px solid whtie;
    //       }
    //     }

    //     .partnerTwo {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //         border-bottom: 2px solid whtie;
    //       }
    //     }

    //     .partnerThree {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //         border-bottom: 2px solid whtie;
    //       }
    //     }

    //     .partnerFour {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //       }
    //     }

    //     .partnerFive {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //       }
    //     }

    //     .partnerSix {
    //       h1 {
    //         height: 20rem;
    //         width: 20rem;
    //       }
    //     }
    //   }
    //}
  }
`;

export default OurPartners;
