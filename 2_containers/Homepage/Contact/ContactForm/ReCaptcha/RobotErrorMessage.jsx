import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "red",
  dark: "var(--red)",
});

const RobotErrorMessage_ = styled.p`
  color: ${textColor};
  font-size: 19px;
  overflow-wrap: break-word;
  min-height: 37px;

  /* margin-left: 1rem; */
  margin-top: 0.6rem;
  margin-bottom: 2rem;
`;

const PlaceHolder_ = styled.p`
  font-size: 19px;
  min-height: 35px;
  font-weight: bold;
  /* margin-left: 1rem; */
  margin-top: 0.6rem;
  margin-bottom: 2rem;
`;

const RobotErrorMessage = (props) => {
  const areEqual = (cur, prev) => {
    if (prev.isRobot !== cur.isRobot) {
      return false;
    }
    if (prev.robotErrorMessage !== cur.robotErrorMessage) {
      return false;
    }
    if (prev.robotCheckingError !== cur.robotCheckingError) {
      return false;
    }
    return true;
  };
  const { isRobot, robotErrorMessage, robotCheckingError } = useSelector(
    (state) => state.contactFormReducer,
    areEqual
  );
  if (isRobot !== true && robotCheckingError !== true) {
    return (
      <PlaceHolder_ aria-label="Placeholder for error message, no use for now."></PlaceHolder_>
    );
  } else {
    return <RobotErrorMessage_>{robotErrorMessage}</RobotErrorMessage_>;
  }
};

export default RobotErrorMessage;
