import React from "react";
import styled from "styled-components";

const Proposal_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  width: 16.8rem;
  height: 5rem;
  border: none;
  font-size: 1.9rem;
  color: var(--white);
  margin-top: 1.5rem;
`;

const Proposal = (props) => {
  return <Proposal_>Hire me!</Proposal_>;
};

export default Proposal;
