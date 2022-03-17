import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [nameInput, setNameInput] = useState("");
  const [msgInput, setmsgInput] = useState("");
  const [btnState, setBtnState] = useState(false);
  

  let newNum = 0;
  const startingPlayers = [
      {
          name: 'john',
          messege: 'you suck'
      },
      {
        name: 'mike',
        messege: 'noooooope'
    },
    {
        name: 'tom',
        messege: 'you suck more'
    }]
    const newPlayers = startingPlayers.map(val => {
        newNum++
        return(
        <div key={ newNum }>
            <h2>{val.name}</h2>
            <p>{val.messege}</p>
        </div>
    )})
    const [tlContent, setTlContent] = useState(newPlayers);

  const newShit = {}

  // update with input info
  const nameIn = (e) => {
    setNameInput(e.target.value);
    // console.log(nameInput);
  };
  const msgIn = (e) => {
    setmsgInput(e.target.value);
    // console.log(msgInput);
  };
  const btnClicked = () => {
    if (btnState === false) {
      //   console.log("btn state is false");
      setBtnState(true);
      //   console.log("now its true");
    } else {
      //   console.log("why are you here");
    }
  };

  //   effect for btn
  useEffect(() => {
    if (btnState == true) {
      //   console.log("btn state is again false");
      const newUserMsgInfo = {
        name: nameInput,
        msg: msgInput,
      };
      const newShit = (
        <div>
          <h2>{newUserMsgInfo.name}</h2>
          <p>{newUserMsgInfo.msg}</p>
        </div>
      );
      setTlContent([...tlContent, newShit]);
      setBtnState(false);
      console.log(newUserMsgInfo);
    }
  }, [btnState]);

  return (
    <div>
      <div>
        <input onChange={nameIn} type="text" placeholder="name" />
        <textarea
          onChange={msgIn}
          placeholder="msg"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={btnClicked}>submit</button>
      </div>
      <div>
        <div>{tlContent}</div>
      </div>
    </div>
  );
};

export default Timeline;
