import React from "react";
import styled from "styled-components";

const SidebarToggle_ = styled.button`
  background: none;
  border: none;
  margin-right: 2rem;
  img {
    display: block;
    width: 4rem;
    height: 4rem;
  }
`;

const SidebarToggle = (props) => {
  return (
    <SidebarToggle_ className="SidebarToggle">
      <img src="/navMenuToggle.svg" />
    </SidebarToggle_>
  );
};

export default SidebarToggle;
