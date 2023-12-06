import styled from "styled-components";

function KarmaAbout() {
  return (
    <KarmaAboutSection>
      <div className="karmaAboutContent">
        <KarmaAboutTitle>
          <h2>Karma The Six Realm Game: Gamifing prosociality. </h2>
        </KarmaAboutTitle>

        <KarmaAboutDescription>
          <p>
            The 6 realms can be understood as forms of existence, or states of
            mind, into which beings are born according to their karma. The
            realms can be viewed as situations in life or even personality
            types. Game play begins in the “Soppana: The Ladder”, where a simple
            mini game calculates your proscial score. This score determines
            which of the 6 realms a player is born into. In each realm, a player
            explores agency/choice using prosocial game mechanics.
          </p>

          <img
            src="https://img.freepik.com/premium-photo/religion-hinduism_930683-9456.jpg?size=626&ext=jpg&ga=GA1.1.2032587638.1700353838&semt=sph"
            alt="Karma"
          />
        </KarmaAboutDescription>
      </div>
    </KarmaAboutSection>
  );
}

const KarmaAboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const KarmaAboutTitle = styled.div`
  color: white;
`;

const KarmaAboutDescription = styled.div`
  margin-top: 2rem;

  p {
    width: 38rem;
    color: white;
    font-size: 1.3rem;
  }
`;

export default KarmaAbout;
