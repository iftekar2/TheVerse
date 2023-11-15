import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <CopyRights>
        <p>Copyright © The Verse 2023</p>
      </CopyRights>
      <Policy>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Contact</p>
      </Policy>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  height: 3rem;
  color: white;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyRights = styled.div`
  p {
    margin: 0.8rem;
  }
`;

const Policy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  p {
    margin: 0.8rem;
    cursor: pointer;
  }
`;

export default Footer;
