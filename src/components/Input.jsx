import React, { useState } from "react";
import MessegeBoard from "./MessegeBoard";
import "./styles/input.css";

const InputApp = () => {
  // 'input' form part      ******
  let keyNum = 0;
  let startingPeople;
  const [nameText, setNameText] = useState("");
  const [msgText, setMsgText] = useState("");
  const [msgBoardItems, setMsgBoardItems] = useState(
    (startingPeople = [
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
    ])
  );
  const nameTyping = (e) => {
    setNameText(e.target.value);
  };
  const msgTyping = (e) => {
    setMsgText(e.target.value);
  };
  const btnClicked = () => {
    setMsgBoardItems([...msgBoardItems, { name: nameText, msg: msgText }]);
  };
  //              ************************************
  // this goes to 'Timeline'
  return (
    <div className="input-main-main-div">
      <div className="input-main-div">
        <form>
          <div className="name-div form-group">
            <input onChange={nameTyping} placeholder="name" />
          </div>
          <div className="msg-div form-group">
            <textarea
              onChange={msgTyping}
              cols="20"
              rows="5"
              placeholder="messege"
            ></textarea>
          </div>
          <div className="btn-div form-group">
            <button
              onClick={btnClicked}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <MessegeBoard
        newInput={msgBoardItems.map((val) => {
          keyNum++;
          return (
            <div key={keyNum} className="card">
              <div className="card-body">
                <h3 className="card-title">{val.name}</h3>
                <p className="card-text">{val.msg}</p>
              </div>
            </div>
          );
        })}
      />
    </div>
  );
};

export default InputApp;
