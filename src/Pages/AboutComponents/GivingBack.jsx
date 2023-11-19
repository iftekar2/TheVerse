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
          <p>
            Join Us in Shaping a Healthier, Happier Future! Support The Verse
            Today!
          </p>
        </div>

        <div className="givingBackDescription">
          <p>
            At The Verse, we are on a mission to transform lives through the
            power of gaming. Our innovative game-based therapeutics are not just
            entertainment; they are pathways to improved mental and emotional
            health for people around the world. We've seen incredible impact,
            and we're just getting started. But to continue our work and expand
            our reach, we need your support. Your donation can make a profound
            difference in our ability to develop and deliver life-changing
            experiences.
          </p>

          <p>
            Every dollar you donate brings us one step closer to our goal of
            making wellbeing accessible to all. Join us on this incredible
            journey and help us create a world where happiness and health are
            within everyone's reach.
          </p>

          <p>
            How to Donate: Visit our website at
            <span>theVersefundation.org</span> to make a secure donation today.
            Your generosity will fuel our mission and change lives. Together, we
            can make The Verse's vision a reality. Together, we can unlock the
            potential for a healthier, happier, and more hopeful future.
          </p>

          <p>Got Questions? Email: info@versebuilding.com.</p>
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

  .givingBackContent {
    .givingBackImage {
      img {
        width: 39rem;
        height: 26rem;
        border-radius: 20px;
      }
    }
  }
`;

export default GivingBack;
