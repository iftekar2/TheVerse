import styled from "styled-components";

function BuildInOpen() {
  return (
    <BuildInOpenSection>
      <div className="buildInOpen">
        <BuildInOpenTitle>
          <h2>Building In the Open</h2>
        </BuildInOpenTitle>

        <BuildInOpenProjects>
          <div className="projectOne">
            <img className="projectOneImage" alt="COMING SOON" />
            <h2>Title</h2>
            <p>Description</p>
          </div>

          <div className="projectTwo">
            <img className="projectTwoImage" alt="COMING SOON" />
            <h2>Title</h2>
            <p>Description</p>
          </div>

          <div className="projectThree">
            <img className="projectThreeImage" alt="COMING SOON" />
            <h2>Title</h2>
            <p>Description</p>
          </div>
        </BuildInOpenProjects>
      </div>
    </BuildInOpenSection>
  );
}

const BuildInOpenSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const BuildInOpenTitle = styled.div`
  h2 {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BuildInOpenProjects = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .projectOne,
  .projectTwo,
  .projectThree {
    width: 25rem;
    height: 45rem;
    background: white;

    .projectOneImage,
    .projectTwoImage,
    .projectThreeImage {
      height: 30rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d9d9d9;
    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      font-size: 2rem;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 950px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .projectOne,
    .projectTwo,
    .projectThree {
      width: 22rem;
      height: 45rem;
    }
  }
`;

export default BuildInOpen;
