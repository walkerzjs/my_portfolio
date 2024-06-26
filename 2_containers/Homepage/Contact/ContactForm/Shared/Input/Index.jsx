import React from "react";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";
import Input from "./Input";

const Index_ = styled.div`
  margin: 0;
  margin-bottom: 1rem;
`;

const Index = (props) => {
  return (
    <Index_>
      <Input id={props.id} />
      <ErrorMessage id={props.id} />
    </Index_>
  );
};

export default Index;
