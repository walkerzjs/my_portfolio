import React from "react";
import styled from "styled-components";

const DetailedIntro_ = styled.article`
  position: absolute;
  top: 40%;
  left: 16.4vw;
  width: 25.3vw;
  height: 14.9vw;
  & p {
    color: var(--black);
    text-align: left;
    font-size: 2.2rem;
    margin-bottom: 3rem;
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