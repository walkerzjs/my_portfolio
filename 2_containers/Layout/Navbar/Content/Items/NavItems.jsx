import React from "react";
import SharedNavItem from "../SharedNavItem";
import NavItemsPresentation from "../../../../../1_components/Layout/Navbar/Content/Items/NavItems";
import ThemeToggle from "./ThemeToggle";
const NavItems = (props) => {
  return (
    <NavItemsPresentation>
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
    </NavItemsPresentation>
  );
};

export default NavItems;
