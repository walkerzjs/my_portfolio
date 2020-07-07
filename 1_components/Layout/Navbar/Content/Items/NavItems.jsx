import React from "react";
import styled from "styled-components";

const NavItems_ = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12.2vw;
  width: 28.4rem;

  @media screen and (max-width: 42rem) {
    display: none;
  }
`;
const NavItems = (props) => {
  return <NavItems_>{props.children}</NavItems_>;
};

export default NavItems;
