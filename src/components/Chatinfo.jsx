import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { ChatContext } from "../context/ChatContext";

function Chatinfo() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chatInfo">
      <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
  );
}

export default Chatinfo;
