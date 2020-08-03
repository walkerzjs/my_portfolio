import React from "react";
import styled from "styled-components";

const SelfIntro_ = styled.p`
  font-size: 2rem;
  margin-top: 5rem;
  @media (max-width: 1136px) {
    margin-top: 3rem;
  }
  @media (max-width: 320px) {
    margin-top: 4rem;
  }
`;

const SelfIntro = (props) => {
  return (
    <SelfIntro_>
      You can call me Jacob. I am a self-taught full stack developer living in
      Melbourne.
    </SelfIntro_>
  );
};

export default SelfIntro;
