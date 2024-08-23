import React, { useContext } from "react";
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";
import TextArea from "./TextArea";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Index_ = styled.div`
  margin: 0;
  margin-bottom: 1rem;
`;

const Index = (props) => {
  const { isValid } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    shallowEqual
  );
  return (
    <Index_>
      <TextArea id={props.id} isValid={isValid} />
      <ErrorMessage id={props.id} />
    </Index_>
  );
};

export default Index;
