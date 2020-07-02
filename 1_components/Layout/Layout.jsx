import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import styled from "styled-components";
import NameLogo from "./Navbar/Content/Items/NameLogo";
import NavItems from "./Navbar/Content/Items/NavItems";
import SharedNavItem from "./Navbar/Content/SharedNavItem";

export const Main = styled.main`
  /* margin-top: 7rem; */
`;

const Layout = (props) => {
  return (
    <>
      <Navbar>
        <NameLogo>
          <SharedNavItem
            id="/"
            label="Junshuai Zhang"
            ariaLabel="navigate to home page"
          />
        </NameLogo>
        <NavItems>
          <SharedNavItem
            ariaLabel="navigate to about me section"
            id="#about me"
            label="About me"
          />
          <SharedNavItem id="#projects" label="Projects" />
          <SharedNavItem id="#contact" label="Contact" />
        </NavItems>
      </Navbar>
      <Sidebar />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
