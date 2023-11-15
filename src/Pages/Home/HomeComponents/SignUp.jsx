import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <SignUpSection>
      <h1>Contact The Verse, Join Us Today</h1>
      <div className="signUpInput">
        <input className="input" placeholder="Email address..." />
        <button className="button">Sign Up</button>
        <div className="disclaimer">
          <p>We care about privacy, and will never share your data.</p>
        </div>
      </div>
    </SignUpSection>
  );
}

const SignUpSection = styled.div``;

export default SignUp;
