import React from "react";
import "./styles/msgBoard.css";

const MessegeBoard = (props) => {
  // this is what goes to 'Timeline'
  return <div className="msgs-main-div">{props.newInput}</div>;
};

export default MessegeBoard;
