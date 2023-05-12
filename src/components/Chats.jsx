import React from "react";
import profile from "../img/profile.png";

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={profile} alt="Profile" />
        <div className="userChatInfo">
          <span>Maxim</span>
          <p>Hello Maxim</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profile} alt="Profile" />
        <div className="userChatInfo">
          <span>Maxim</span>
          <p>Hello Maxim</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profile} alt="Profile" />
        <div className="userChatInfo">
          <span>Maxim</span>
          <p>Hello Maxim</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
