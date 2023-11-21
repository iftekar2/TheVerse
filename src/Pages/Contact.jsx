import styled from "styled-components";
import ContactComponents from "./ContactComponents/ContactComponents";
import LearnMore from "./ContactComponents/LearnMore";

function Contact() {
  return (
    <ContactPage>
      <ContactComponents />
      <LearnMore />
    </ContactPage>
  );
}

const ContactPage = styled.div`
  margin-top: 10rem;
`;

export default Contact;
