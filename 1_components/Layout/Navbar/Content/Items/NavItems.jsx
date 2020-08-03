import React from "react";
import styled from "styled-components";

const NavItems_ = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 9.3vw;
  width: 34.4rem;

  @media (max-width: 672px) {
    display: none;
  }
`;
const NavItems = (props) => {
  return <NavItems_>{props.children}</NavItems_>;
};

export default NavItems;
