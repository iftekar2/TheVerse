import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <SignUpSection>
      <div className="signUpComponents">
        <h1>Contact The Verse, Join Us Today</h1>
        <div className="signUpInput">
          <div className="inputAndButton">
            <input placeholder="Email Address..." />
            <button className="button">Sign Up</button>
          </div>

          <div className="disclaimer">
            <p>We care about privacy, and will never share your data.</p>
          </div>
        </div>
      </div>
    </SignUpSection>
  );
}

const SignUpSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  .signUpComponents {
    margin-top: 10rem;
    margin-bottom: 2rem;
    background: #0d6efd;
    height: 9rem;
    width: 76.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 5px;

    h1 {
      color: white;
      text-align: center;
    }

    p {
      color: #8cbafe;
      font-size: 1.3rem;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .inputAndButton {
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        height: 2.5rem;
        width: 16rem;
        font-size: 1rem;
        padding-left: 0.5rem;
        border: 1px solid black;
        border-radius: 2px;
      }

      button {
        width: 5rem;
        height: 2.4rem;
        font-size: 1rem;
        background: #0d6efd;
        color: white;
        border: 1px solid white;
        border-radius: 2px;
      }
    }
  }

  @media (max-width: 950px) {
    .signUpComponents {
      width: 40rem;
      height: 20rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .inputAndButton {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default SignUp;
