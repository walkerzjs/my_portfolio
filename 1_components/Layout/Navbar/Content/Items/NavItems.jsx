import React from "react";
import styled from "styled-components";

const NavItems_ = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 23.4rem;
  width: 28.4rem;
`;
const NavItems = (props) => {
  return <NavItems_>{props.children}</NavItems_>;
};

export default NavItems;