// code is functional. simply a different way of solving the problem
//      main take away - handling code outside of the return at end of component
//          a working func that returns an array of working and usable div.
//      copy/paste into 'input.jsx' should make it work.


// import React, { useState } from "react";
// import MessegeBoard from "./MessegeBoard";
// import "./styles/input.css";

// const InputApp = () => {
//   // 'input' form part      ******
//   // sets state and collects inputs for name/msg
//   const [nameText, setNameText] = useState("");
//   const [msgText, setMsgText] = useState("");
//   const nameTyping = (e) => {
//     setNameText(e.target.value);
//   };
//   const msgTyping = (e) => {
//     setMsgText(e.target.value);
//   };
//   const btnClicked = () => {
//     console.log("clicked");
//     let newInputSubmit = msgConstructFunc([{ name: nameText, msg: msgText }]);
//     setMsgBoardItems([...msgBoardItems, newInputSubmit]);
//   };

//   //   Message board part     ******
//   // used for key value component
//   let keyNum = 0;

//   //   func that creates a card div to be added to msg board
//   const msgConstructFunc = (x) => {
//     return x.map((val) => {
//       keyNum++;
//       return (
//         <div key={keyNum} className="card">
//           <div className="card-body">
//             <h3 className="card-title">{val.name}</h3>
//             <p className="card-text">{val.msg}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   //   list of starting msg board commenters(only thing to note here are the format of 'name' and 'msg'; for when sending to msgConstructFunc)
//   const startingPeople = [
//     {
//       name: "Bob Belcher",
//       msg: "We cook burgers. Thats it. Jimmy Pesto is a bitch.",
//     },
//     {
//       name: "Charlie Day",
//       msg: "Everywhere I look I see one name, Pepe Silvia. Wild Card.",
//     },
//     {
//       name: "John Smith",
//       msg: "Call me agent Smith",
//     },
//   ];
//   // formatting initial msg board divs and values with func
//   const startingConstructed = msgConstructFunc(startingPeople);

//   //   sets state of msg board
//   const [msgBoardItems, setMsgBoardItems] = useState(startingConstructed);

//   //              ************************************
//   // this goes to 'Timeline'
//   return (
//     <div className="input-main-main-div">
//       <div className="input-main-div">
//         <form>
//           <div className="name-div form-group">
//             <input onChange={nameTyping} placeholder="name" />
//           </div>
//           <div className="msg-div form-group">
//             <textarea
//               onChange={msgTyping}
//               cols="20"
//               rows="5"
//               placeholder="messege"
//             ></textarea>
//           </div>
//           <div className="btn-div form-group">
//             <button
//               onClick={btnClicked}
//               type="button"
//               className="btn btn-primary"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       <MessegeBoard newInput={msgBoardItems} />
//     </div>
//   );
// };

// export default InputApp;