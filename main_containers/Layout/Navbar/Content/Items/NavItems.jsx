import React from "react";
import SharedNavItem from "../SharedNavItem";
// import NavItemsPresentation from "../../../../../1_components/Layout/Navbar/Content/Items/NavItems";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

const NavItems_ = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 9.3vw;
  /* width: 34.4rem; */

  @media (max-width: 672px) {
    display: none;
  }
`;
// const NavItems = (props) => {
//   return <NavItems_>{props.children}</NavItems_>;
// };

// export default NavItems;

const NavItems = (props) => {
  return (
    <NavItems_>
      <SharedNavItem
        ariaLabel="navigate to about me section"
        id="aboutMe"
        label="About me"
      />
      <SharedNavItem
        id="https://asadream.my-portfoliojsz.com/"
        label="Blog"
        type="external"
      />
      <SharedNavItem id="projects" label="Projects" />
      <SharedNavItem id="contact" label="Contact" />

      <ThemeToggle />
    </NavItems_>
  );
};

export default NavItems;
