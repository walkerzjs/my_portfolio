import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--red-origin)",
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
  // const areEqual = (cur, prev) => {
  //   console.log("are qual robot: ", cur, prev);
  //   if (prev.isRobot !== cur.isRobot) {
  //     return false;
  //   }
  //   if (prev.robotErrorMessage !== cur.robotErrorMessage) {
  //     return false;
  //   }
  //   if (prev.robotCheckingError !== cur.robotCheckingError) {
  //     return false;
  //   }
  //   return true;
  // };
  const isRobot = useSelector(
    (state) => state.contactFormReducer.isRobot,
    (cur, prev) => {
      // console.log("1", cur, prev);
      return cur === prev;
    }
  );
  const robotCheckingError = useSelector(
    (state) => state.contactFormReducer.robotCheckingError,
    (cur, prev) => {
      // console.log("2", cur, prev);
      return cur === prev;
    }
  );
  const robotErrorMessage = useSelector(
    (state) => state.contactFormReducer.robotErrorMessage,
    (cur, prev) => {
      // console.log("3", cur, prev);
      return cur === prev;
    }
  );
  // console.log("update robot error message: ", isRobot, robotCheckingError);
  let content = (
    <PlaceHolder_ aria-label="Placeholder for error message, no use for now."></PlaceHolder_>
  );

  if (isRobot === true || robotCheckingError === true) {
    content = <RobotErrorMessage_>{robotErrorMessage}</RobotErrorMessage_>;
  }
  return content;
};

export default RobotErrorMessage;
