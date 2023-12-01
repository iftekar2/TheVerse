import styled from "styled-components";

function LearnMore() {
  return (
    <LearnMoreSection>
      <div className="learnMore">
        <div className="learnMoreTitle">
          <h1>Learn More</h1>
        </div>

        <div className="learnMoreContent">
          <div className="learnMore">
            <div className="learnMoreElements">
              <div className="aboutTheVerseImage">
                <img
                  src="https://img.freepik.com/free-vector/exploring-concept-illustration_114360-958.jpg?t=st=1700579734~exp=1700580334~hmac=78a8b0429e062788e25d7ba049d430974b74319c6b80c8509aa6670225cb451f"
                  alt="A person looking at a map."
                />
              </div>

              <h1>Learn more about The Verse</h1>
              <p>
                Sign up for updates, play-tests, game jams, and updates in The
                Verse.
              </p>
              <button>Join Us</button>
            </div>
          </div>

          <div className="learnMore">
            <div className="learnMoreElements">
              <div className="joinVerseImage">
                <img
                  src="https://img.freepik.com/free-vector/work-anniversary-illustration_23-2150176802.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
                  alt="People celebrating."
                />
              </div>

              <h1>Get passion? Got Purpose? Want to make an impact?</h1>
              <p>We want to hear from you.</p>
              <button>Share your Idea</button>
            </div>
          </div>

          <div className="learnMore">
            <div className="learnMoreElements">
              <div className="suggestionsImage">
                <img
                  src="https://img.freepik.com/free-vector/mind-map-concept-illustration_114360-1727.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
                  alt="People celebrating."
                />
              </div>

              <h1>Got an Idea? Suggestions?</h1>
              <p>We want to hear from you.</p>
              <button>Share your Idea</button>
            </div>
          </div>

          <div className="learnMore">
            <div className="learnMoreElements">
              <div className="supportTheMovementImage">
                <img
                  src="https://img.freepik.com/free-vector/spread-more-love-support-black-community-vector_53876-165963.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
                  alt="People celebrating."
                />
              </div>

              <h1>Support the movement</h1>
              <p>
                Your contributions go directly towards a team of 70 people who
                donate ~20hrs per week to build games and experiences that
                impact health and consciousness.
              </p>
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </LearnMoreSection>
  );
}

const LearnMoreSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: white;
  text-align: center;

  .learnMoreContent {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .learnMore {
      text-align: center;
      background: white;
      color: black;
      width: 34rem;
      height: 32.5rem;

      .learnMoreElements {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1.5rem;

        .aboutTheVerseImage {
          width: 31rem;
          height: 18rem;
          background: #ffded6;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;

          img {
            height: 10rem;
            width: 10rem;
            border-radius: 10px;
          }
        }

        .joinVerseImage {
          width: 31rem;
          height: 18rem;
          background: #ffd6ff;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 12rem;
            width: 12rem;
            border-radius: 10px;
          }
        }

        .suggestionsImage {
          width: 31rem;
          height: 18rem;
          background: #ffcfe6;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 12rem;
            width: 12rem;
            border-radius: 10px;
          }
        }

        .supportTheMovementImage {
          width: 31rem;
          height: 18rem;
          background: #d6f1ff;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 12rem;
            width: 12rem;
            border-radius: 10px;
          }
        }

        h1 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        p {
          color: #6c757d;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        button {
          background: white;
          border: 1.5px solid black;
          height: 2.5rem;
          width: 18rem;
          font-size: 1.1rem;
          font-weight: 550;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 950px) {
      .learnMore {
        text-align: center;
        background: white;
        color: black;
        width: 20rem;
        height: 37rem;

        .learnMoreElements {
          .aboutTheVerseImage {
            width: 18rem;
            height: 18rem;
            background: #ffded6;
            margin-left: -0.5rem;

            img {
              height: 10rem;
              width: 10rem;
              border-radius: 10px;
            }
          }

          .joinVerseImage {
            width: 18rem;
            height: 18rem;
            background: #ffd6ff;
            margin-left: -0.5rem;

            img {
              height: 10rem;
              width: 10rem;
              border-radius: 10px;
            }
          }

          .suggestionsImage {
            width: 18rem;
            height: 18rem;
            background: #ffcfe6;
            margin-left: -0.5rem;

            img {
              height: 10rem;
              width: 10rem;
              border-radius: 10px;
            }
          }

          .supportTheMovementImage {
            width: 18rem;
            height: 18rem;
            background: #a7e1ff;
            margin-left: -0.5rem;

            img {
              height: 10rem;
              width: 10rem;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;

export default LearnMore;
