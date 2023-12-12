import styled from "styled-components";
import { NavLink } from "react-router-dom";

function ProjectsInVerse() {
  return (
    <ProjectsInVerseSection>
      <div className="projectInVerse">
        <Slogan>
          <h1>Projects In The Verse</h1>
          <p>Games and Digital Experiences</p>
        </Slogan>

        <Projects>
          <First>
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              alt="Adventure in Breath Image"
            />
            <div className="firstTag">
              <p>Game</p>
            </div>
            <div className="experienceTitle">
              <h1>Adventure in Breath (AiB)</h1>
            </div>
            <div className="experienceDescription">
              <p>
                The Verse’s first breath microgame, ‘Adventures in Breath:
                Solace’, teaches players how to modulate their breath in
                response to stressful game events by activating their vagus
                nerve/parasympathetic system (detected through microphone).
              </p>
            </div>

            <div className="playButton">
              <NavLink to="/karma">
                <button>Play Game</button>
              </NavLink>
            </div>
          </First>
          <Second>
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              alt="Adventure in Breath"
            />
            <div className="secondTag">
              <p>Game</p>
            </div>
            <div className="experienceTitle">
              <h1>Karma The Six Real Game</h1>
            </div>
            <div className="experienceDescription">
              <p>
                Based on players' Karmic Score (psychological survey and game
                play), players are born into one of the 6 realms of existence
                (God, Demi-God, Human, Animal, Ghost, Hell) where they employ
                our human ability to “tend and befriend” to solve challenges and
                move on to the next levels.
              </p>
            </div>

            <div className="playButton">
              <NavLink to="/adventureInBreath">
                <button>Play Game</button>
              </NavLink>
            </div>
          </Second>
          <Third>
            <img
              src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340"
              alt="Adventure in Breath Image"
            />
            <div className="thirdTag">
              <p>Digital Experience</p>
            </div>
            <div className="experienceTitle">
              <h1>WalkXR</h1>
            </div>
            <div className="experienceDescription">
              <p>
                A multi media/multi social therapeutic that provides our
                community with the ability to "walk" in social themes/constructs
                through the experiences of others. WalkX through a wellbeing
                museum that leverages the immersive and interactive qualities of
                extended reality (XR) to provide visitors with a unique and
                transformative experience. The museum features a variety of
                exhibits and installations that focus on different aspects of
                wellbeing, such as mindfulness, physical health, emotional
                wellness, and social connection.
              </p>
            </div>

            <div className="experienceButton">
              <NavLink to="/walkXR">
                <button>Experience Walk</button>
              </NavLink>
            </div>
          </Third>
        </Projects>
      </div>
    </ProjectsInVerseSection>
  );
}

const ProjectsInVerseSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Slogan = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #d3d3d4;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  margin-top: 3rem;
`;

const First = styled.div`
  height: 53rem;
  width: 24rem;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    height: 25rem;
    width: 100%;
    border-radius: 5px 5px 0px 0;
  }

  div {
    margin-left: 1rem;
    margin-right: 1rem;

    h1 {
      font-size: 1.2rem;
      color: black;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }

    p {
      color: black;
      font-size: 1.2rem;
    }
  }

  .firstTag {
    background: #2b80fd;
    width: 3.5rem;
    height: 1.5rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      font-size: 0.8rem;
      color: white;
    }
  }

  .playButton {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: #2b80fd;
      color: white;
      border: none;
      height: 2.5rem;
      width: 10rem;
      font-size: 1.3rem;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 950px) {
    height: 50rem;
    width: 20rem;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
`;

const Second = styled.div`
  height: 53rem;
  width: 24rem;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    height: 25rem;
    width: 100%;
    border-radius: 5px 5px 0px 0;
  }

  div {
    margin-left: 1rem;
    margin-right: 1rem;

    h1 {
      font-size: 1.2rem;
      color: black;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }

    p {
      color: black;
      font-size: 1.2rem;
    }
  }

  .secondTag {
    background: #2b80fd;
    width: 3.5rem;
    height: 1.5rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      color: white;
    }
  }

  .playButton {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: #2b80fd;
      color: white;
      border: none;
      height: 2.5rem;
      width: 10rem;
      font-size: 1.3rem;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 950px) {
    height: 50rem;
    width: 20rem;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
`;

const Third = styled.div`
  height: 53rem;
  width: 24rem;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column; /* Set as a flex container with column direction */

  img {
    height: 25rem;
    width: 100%;
    border-radius: 5px 5px 0px 0;
  }

  div {
    margin-left: 1rem;
    margin-right: 1rem;

    h1 {
      font-size: 1.2rem;
      color: black;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }

    p {
      color: black;
      font-size: 1.2rem;
    }
  }

  .thirdTag {
    background: #2b80fd;
    width: 8rem;
    height: 1.5rem;
    border-radius: 20px;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      color: white;
    }
  }

  .experienceButton {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: #2b80fd;
      color: white;
      border: none;
      height: 2.5rem;
      width: 12rem;
      font-size: 1.3rem;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 950px) {
    height: 60rem;
    width: 20rem;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
`;

export default ProjectsInVerse;
