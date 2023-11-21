import styled from "styled-components";
import ContactComponents from "./ContactComponents/ContactComponents";

function Contact() {
  return (
    <ContactPage>
      <ContactComponents />
    </ContactPage>
  );
}

const ContactPage = styled.div`
  margin-top: 10rem;
`;

export default Contact;
