import React, { useState } from "react";
import "./styles/msgBoard.css";

const MessegeBoard = () => {
  // used for key value component
  let keyNum = 0;

  //   func that creates a card div to be added to msg board
  const msgConstructFunc = (x) => {
    return x.map((val) => {
      keyNum++;
      return (
        <div key={keyNum} className="card">
          <div className="card-body">
            <h3 className="card-title">{val.name}</h3>
            <p className="card-text">{val.msg}</p>
          </div>
        </div>
      );
    });
  };

  //   list of starting msg board commenters(only thing to note here are the format of 'name' and 'msg'; for when sending to msgConstructFunc)
  const startingPeople = [
    {
      name: "Bob Belcher",
      msg: "We cook burgers. Thats it. Jimmy Pesto is a bitch.",
    },
    {
      name: "Charlie Day",
      msg: "Everywhere I look I see one name, Pepe Silvia. Wild Card.",
    },
    {
      name: "John Smith",
      msg: "Call me agent Smith",
    },
  ];
  // formatting initial msg board divs and values with func
  const startingConstructed = msgConstructFunc(startingPeople);

  //   sets state of msg board
  const [msgBoardItems, setMsgBoardItems] = useState(startingConstructed);

  // this is what goes to 'Timeline'
  return <div className="msgs-main-div">{msgBoardItems}</div>;
};

export default MessegeBoard;
 