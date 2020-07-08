import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
const Header_ = styled.div`
  border-bottom: 2px solid var(--grey-1);
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
`;

const Header = (props) => {
  return (
    <Header_>
      <Toggle />
    </Header_>
  );
};

export default Header;
