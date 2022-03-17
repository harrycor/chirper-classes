import React from "react";
import InputApp from "./Input";
import MessegeBoard from "./MessegeBoard";
import './styles/main.css'

const Timeline = () => {
  return (
    <div className="main-div">
      <InputApp />
      <MessegeBoard />
    </div>
  );
};

export default Timeline;
