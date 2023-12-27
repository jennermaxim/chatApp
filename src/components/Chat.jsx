import React from "react";
import Chatinfo from "./Chatinfo";
import Messages from "./Messages";
import Input from "./Input";

function Chat({ isVisible, setIsVisible }) {
  return (
    <div className="chat" style={{ display: !isVisible && "block" }}>
      <Chatinfo isVisible={isVisible} setIsVisible={setIsVisible} />
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
