import React from "react";
import styled from "styled-components";

export const Nav = styled.nav`
  z-index: 1000;
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 7rem;

  border: 2px solid var(--grey-1);
  background-color: var(--white);
  border-bottom: 2px solid #e5e5e5;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = (props) => {
  return <Nav aria-label="Navigation bar">{props.children}</Nav>;
};

export default Navbar;
