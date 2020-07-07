import React from "react";
import styled from "styled-components";

const SocialMedia_ = styled.div`
  display: flex;
  /* padding-top: 90%; */

  margin-right: 13.5vw;
  margin-bottom: 5.7vw;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const SocialMedia = (props) => {
  return (
    <SocialMedia_>
      <a
        href="https://github.com/walkerzjs"
        target="_blank"
        aria-label="my github link"
      >
        <img src="/logoGithub.svg" alt="my github link image" />
      </a>
    </SocialMedia_>
  );
};

export default SocialMedia;
