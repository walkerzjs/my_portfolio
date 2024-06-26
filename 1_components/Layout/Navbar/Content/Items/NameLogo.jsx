import React from "react";
import styled from "styled-components";

const NameLogo_ = styled.ul`
  margin-left: 9.3vw;
  @media (max-width: 672px) {
    margin-left: 2rem;
  }
`;

const NameLogo = (props) => {
  return <NameLogo_>{props.children}</NameLogo_>;
};

export default NameLogo;
