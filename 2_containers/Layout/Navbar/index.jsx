import React from "react";
import NameLogo from "./Content/Items/NameLogo";
import NavItems from "./Content/Items/NavItems";
import SidebarToggle from "./Content/SidebarToggle";
import Nav from "../../../1_components/Layout/Navbar/Navbar";
import styled from "styled-components";

const NavMenu = styled.div`
  width: 100%;
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Navbar = (props) => {
  return (
    <Nav>
      <NameLogo />
      <NavItems />

      <SidebarToggle />
    </Nav>
  );
};

export default Navbar;
