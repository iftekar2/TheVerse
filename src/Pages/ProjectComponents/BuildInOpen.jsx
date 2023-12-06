import styled from "styled-components";

function BuildInOpen() {
  return (
    <BuildInOpenSection>
      <div className="buildInOpen">
        <BuildInOpenTitle>
          <h2>Building In the Open</h2>
        </BuildInOpenTitle>
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
  }
`;

export default BuildInOpen;
