import React from "react";
import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <FooterSection>
      <CopyRights>
        <p>Copyright © The Verse 2023</p>
      </CopyRights>
      <div className="policyAndIcons">
        <Policy>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
        </Policy>

        <SocialMedia>
          <FaXTwitter className="twitter" />
          <FaLinkedin className="linkedin" />
          <FaInstagram className="instagram" />
        </SocialMedia>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  height: 5rem;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .policyAndIcons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 6rem;
  }
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

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  gap: 1.8rem;

  .twitter,
  .linkedin,
  .instagram {
    font-size: 30px;
  }

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
`;

export default Footer;
