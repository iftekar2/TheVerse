import styled from "styled-components";

function GivingBack() {
  return (
    <GivingBackSection>
      <div className="givingBackContent">
        <div className="givingBackImage">
          <img
            src="https://img.freepik.com/premium-vector/illustration-with-red-gift-box-hands-red-gift-wrapping-flat-style-vector_103291-575.jpg"
            alt="Giving Back"
          />
        </div>

        <div className="givingBackTitle">
          <h1>Giving Back</h1>
          <p>A foundation of Hope</p>
        </div>

        <div className="givingBackDescription">
          <p>
            The Verse partners with crowd-scoured bereavement funds to support
            families who have recently lost an income earner. Backed by out
            partners and members The Verse is committed to restoring hope and
            stability.
          </p>

          <p>
            Learn more at{" "}
            <a href="https://versebuilding.com/index.html" target="_blank">
              theVersefundation.org
            </a>
          </p>
        </div>
      </div>
    </GivingBackSection>
  );
}

const GivingBackSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  color: white;

  .givingBackContent {
    .givingBackImage {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 39rem;
        height: 26rem;
        border-radius: 20px;
        margin-bottom: 1.5rem;
      }
    }

    .givingBackTitle {
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        color: #c2c3c5;
        font-size: 1.3rem;
      }
    }

    .givingBackDescription {
      text-align: center;
      p {
        margin-bottom: 1rem;
        font-size: 1.3rem;
        width: 50rem;
      }

      a {
        color: #2b80fd;
      }
    }
  }
`;

export default GivingBack;
