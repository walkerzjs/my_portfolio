import React from "react";
import SharedNavItem from "../SharedNavItem";
import NameLogoPresentation from "../../../../../1_components/Layout/Navbar/Content/Items/NameLogo";
const NameLogo = (props) => {
  return (
    <NameLogoPresentation>
      <SharedNavItem
        id="intro"
        label="Junshuai Zhang (Jacob)"
        ariaLabel="navigate to home page"
      />
    </NameLogoPresentation>
  );
};

export default NameLogo;
