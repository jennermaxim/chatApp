import React, { useContext } from "react";
import Arrow from "../img/arrow.png";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { ChatContext } from "../context/ChatContext";

function Chatinfo({ isVisible, setIsVisible }) {
  const { data } = useContext(ChatContext);

  const showSidebar = () => {
    setIsVisible(true);
  };

  return (
    <div className="chatInfo">
      {!isVisible && (
        <img className="backArrow" src={Arrow} alt="" onClick={showSidebar} />
      )}
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
