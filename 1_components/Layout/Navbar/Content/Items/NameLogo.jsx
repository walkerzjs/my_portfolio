import React from "react";
import styled from "styled-components";

const NameLogo_ = styled.div`
  margin-left: 9.3vw;
  @media screen and (max-width: 42rem) {
    margin-left: 2rem;
  }
`;

const NameLogo = (props) => {
  return <NameLogo_>{props.children}</NameLogo_>;
};

export default NameLogo;
