import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Proposal_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  width: 16.8rem;
  height: 5rem;
  border: none;

  margin-top: 1.5rem;
  display: block;
  cursor: pointer;
  & a {
    text-decoration: none;
    font-size: 1.9rem;
    color: var(--white);
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 320px) {
    width: 80%;
    font-size: 1.7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }
`;

const Proposal = (props) => {
  return (
    <Proposal_>
      <AnchorLink offset="62" href="#contact">
        Hire me!
      </AnchorLink>
    </Proposal_>
  );
};

export default Proposal;
