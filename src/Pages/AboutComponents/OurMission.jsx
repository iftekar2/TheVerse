import styled from "styled-components";

function OurMission() {
  return (
    <OurMissionSection>
      <div className="ourMissionContent">
        <div className="ourMissionImage">
          <img
            src="https://cdn.dribbble.com/users/78464/screenshots/5126332/untitled-1.jpg?resize=800x600&vertical=center"
            alt="Game"
          />
        </div>

        <div className="ourMissionTitle">
          <h1>Building a new Future</h1>
        </div>

        <div className="ourMissionDescription">
          <div className="ourMissionElements">
            <p>
              TheVerse builds digital experiences and games that improve
              wellbeing. We build game mechanics around breathwork, mindfulness,
              meditation-based techniques, prosociality, empathy, and
              perspective taking. We believe that games have great potential to
              improve health and wellbeing.
            </p>

            <p>
              Our mission is to create digital experiences and games that
              positively impact lives by harnessing the transformative potential
              of interactive entertainment. We are committed to: Wellbeing
              Enhancement Innovative Mechanics Empowering Through Play
              Community-Connection-Co Creation Research and Development Advocacy
              for Wellbeing by aligning our passion and purpose with impactful
              work, we can boost motivation, engagement, and satisfaction. This
              alignment ultimately results in improved performance and
              productivity, while also nurturing creativity and fostering
              innovation.
            </p>

            <p>
              What is The Verse: The Verse is an engine of development. The
              Verse builds digital experiences and games that improve wellbeing.
              The Verse aligns passion and purpose with IMPACT! We believe that
              prosocial collaboration allows The Verse/humanity to unshackle the
              potential needed to build better “impact”. The Verse Is A
              Metaverse & Our Metaverse is a Tool: an
              interconnected/interdependent exploration and discovery space
              designed to promote physical and mental wellbeing for its
              community. We are building the company of the future… Driven by
              collaboration and community Validated by game-based products and
              services that shift health/consciousness We employ BUILD IN THE
              OPEN/BUILD IN THE PUBLIC Increased accountability and motivation
              to complete the project, as a public audience is watching and
              following the progress. Opportunities for early feedback and
              validation of ideas. Building a community of supporters and
              potential customers. Opportunities for networking and
              collaboration with other creators and experts in the field.
              Gaining recognition and visibility for the project. How We Define
              Success Individual Level - Happiness, Growth, Fulfillment Team
              Level - Pro-Social, Collaborative, Cooperative Impact Level -
              Health Outcomes from Engagement with Verse Products and Services
              Financial Level - Average Annual Salary & Net Revenue Growth.
            </p>
          </div>
        </div>
      </div>
    </OurMissionSection>
  );
}

const OurMissionSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  color: white;

  .ourMissionContent {
    .ourMissionImage {
      img {
        width: 60rem;
        height: 30rem;
        margin-bottom: 2rem;
      }
    }

    .ourMissionTitle {
      h1 {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

    .ourMissionDescription {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 50rem;
        text-align: center;
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 950px) {
      .ourMissionImage {
        img {
          width: 20rem;
          height: 20rem;
          margin-bottom: 2rem;
        }
      }

      .ourMissionTitle {
        width: 20rem;
        h1 {
          text-align: center;
          margin-bottom: 1rem;
        }
      }

      .ourMissionDescription {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 20rem;
          text-align: center;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`;

export default OurMission;
