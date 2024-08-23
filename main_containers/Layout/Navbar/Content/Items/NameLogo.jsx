import React from "react";
import SharedNavItem from "../SharedNavItem";
// import NameLogoPresentation from "../../../../../1_components/Layout/Navbar/Content/Items/NameLogo";

import styled from "styled-components";

const NameLogo_ = styled.ul`
  margin-left: 9.3vw;
  @media (max-width: 672px) {
    margin-left: 2rem;
  }
`;

// const NameLogo = (props) => {
//   return <NameLogo_>{props.children}</NameLogo_>;
// };

// export default NameLogo;

const NameLogo = (props) => {
  return (
    <NameLogo_>
      <SharedNavItem
        id="intro"
        label="Junshuai Zhang (Jacob)"
        ariaLabel="navigate to home page"
      />
    </NameLogo_>
  );
};

export default NameLogo;
