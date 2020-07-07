import React from "react";
import styled from "styled-components";

const NameLogo_ = styled.div`
  margin-left: 9.3vw;
`;

const NameLogo = (props) => {
  return <NameLogo_>{props.children}</NameLogo_>;
};

export default NameLogo;
