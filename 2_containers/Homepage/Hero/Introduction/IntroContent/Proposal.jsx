import React from "react";
import styled from "styled-components";
import useScroll from "../../../../Shared/useScroll";
const Proposal_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  width: 16.8rem;
  height: 5rem;
  border: none;
  font-size: 1.9rem;
  color: var(--white);
  margin-top: 1.5rem;
  display: block;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    width: 80%;
    font-size: 1.7rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }
`;

const Proposal = (props) => {
  const onClick = useScroll("contact");
  return <Proposal_ onClick={onClick}>Hire me!</Proposal_>;
};

export default Proposal;
