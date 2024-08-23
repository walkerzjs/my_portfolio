import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Proposal_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1.5rem;
  height: 5rem;
  border: none;

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

const Proposal = (props) => {
  return (
    <Proposal_>
      <AnchorLink offset="62" href="#contact">
        Leave me a message
      </AnchorLink>
    </Proposal_>
  );
};

export default Proposal;
