import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ProposalEmail_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 5rem;
  border: none;
  display: inline-block;

  margin-top: 1.5rem;
  display: inline-block;
  cursor: pointer;
  & a {
    text-decoration: none;
    font-size: 1.9rem;
    color: white;
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 320px) {
    font-size: 1.7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    height: 8rem;
  }
`;

const ProposalEmail = (props) => {
  return (
    <ProposalEmail_>
      <a href={`mailto:walkerzjs2@gmail.com`} rel="noopener noreferrer">
        Send me email
      </a>
    </ProposalEmail_>
  );
};

export default ProposalEmail;
