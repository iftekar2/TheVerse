import styled from "styled-components";

function ContactComponents() {
  return (
    <ContactComponentsSection>
      <div className="contactComponent">
        <div className="contactComponentTitle">
          <h1>Get in Touch</h1>
          <p>We’d Love to Hear from You</p>
        </div>

        <div className="contactComponentInputs">
          <input className="name" placeholder="Name" />
          <input className="Email" placeholder="Email" />
          <input className="Phone" placeholder="Phone" />
          <input className="Subject" placeholder="Subject" />
          <textarea className="message" placeholder="Your Message"></textarea>
        </div>
      </div>
    </ContactComponentsSection>
  );
}

const ContactComponentsSection = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .contactComponentTitle {
    text-align: center;
    p {
      font-size: 1.3rem;
      text-align: center;
      color: #c2c3c5;
      margin-top: 0.5rem;
    }
  }

  .contactComponentInputs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;

    input {
      width: 30rem;
      height: 3rem;
      font-color: #000000;
      font-size: 1.2rem;
      padding-left: 0.8rem;
      background: white;
      border-radius: 15px;
      border: none;
    }

    textarea {
      width: 30rem;
      height: 8rem;
      font-color: #000000;
      font-size: 1.2rem;
      padding-left: 0.8rem;
      padding-top: 0.8rem;
      background: white;
      border-radius: 15px;
      border: none;
    }
  }

  @media (max-width: 950px) {
    .contactComponentInputs {
      input {
        width: 20rem;
        height: 3rem;
        font-color: #000000;
        font-size: 1.2rem;
        padding-left: 0.5rem;
        background: white;
        border-radius: 10px;
        border: none;
      }

      textarea {
        width: 20rem;
        height: 8rem;
        font-color: #000000;
        font-size: 1.2rem;
        padding-left: 0.8rem;
        padding-top: 0.8rem;
        background: white;
        border-radius: 15px;
        border: none;
      }
    }
  }
`;

export default ContactComponents;
