import React from "react";
import styled from "styled-components";

const SelfIntro_ = styled.p`
  font-size: 2rem;
  margin-top: 5rem;
  @media (max-width: 1190px) {
    margin-top: 3rem;
  }
  @media (max-width: 320px) {
    margin-top: 4rem;
  }
`;

const SelfIntro = (props) => {
  return (
    <SelfIntro_>I am a software developer living in Melbourne. I am currently working as a data analyst.</SelfIntro_>
  );
};

export default SelfIntro;
