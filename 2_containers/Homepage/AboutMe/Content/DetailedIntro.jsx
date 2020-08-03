import React from "react";
import styled from "styled-components";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});

const DetailedIntro_ = styled.article`
  margin-left: 16.4vw;
  width: 25.3vw;
  height: auto;
  display: block;
  & p {
    color: ${textColor};
    transition: all 0.2s ease-out;
    text-align: left;
    font-size: 2.2rem;
    margin-bottom: 3rem;

    @media (max-width: 1280px) {
      font-size: 2rem;
    }
    @media (max-width: 180px) {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 950px) {
    margin-left: 0;
    width: 60vw;
  }
`;

const DetailedIntro = (props) => {
  return (
    <DetailedIntro_ aria-label="My detailed introduction">
      <p>
        I am a React developer, but I can also develop in c# and python for
        backend.
      </p>
      <p>
        Nowadays, people use cloud technology, and I am too. I can use Amazon
        Web Service and Microsoft Azure to facilitate my development process.
      </p>
    </DetailedIntro_>
  );
};

export default DetailedIntro;
