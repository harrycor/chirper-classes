import React, { useState } from "react";
import './styles/input.css'

const InputApp = () => {

    // sets state and collects inputs for name/msg
    const [nameText, setNameText] = useState('');
    const [msgText, setMsgText] = useState('');
    const nameTyping = e => {
        setNameText(e.target.value);
    }
    const msgTyping = e => {
        setMsgText(e.target.value);
    }
    const btnClicked = () => {
        console.log('clicked');
    }


    // this goes to 'Timeline'
  return (
    <div className="input-main-div">
        <form>
            <div className="name-div form-group">
                <input onChange={nameTyping} placeholder="name" />
            </div>
            <div className="msg-div form-group">
                <textarea onChange={msgTyping} cols="20" rows="5" placeholder="messege"></textarea>
            </div>
            <div className="btn-div form-group">
                <button onClick={btnClicked} type="button" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  );
};

export default InputApp;