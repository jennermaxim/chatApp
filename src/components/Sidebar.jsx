import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function Sidebar({ hideChat, smallScreen }) {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats hideChat={hideChat} smallScreen={smallScreen} />
    </div>
  );
}

export default Sidebar;
