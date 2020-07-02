import React from "react";
import NameLogo from "./Content/Items/NameLogo";
import NavItems from "./Content/Items/NavItems";
import Nav from "../../../1_components/Layout/Navbar/Navbar";

const Navbar = (props) => {
  return (
    <Nav>
      <NameLogo />
      <NavItems />
    </Nav>
  );
};

export default Navbar;
