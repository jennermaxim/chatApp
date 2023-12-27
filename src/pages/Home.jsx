import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 480);
  // const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 480;
      setSmallScreen(isSmall);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideChat = () => {
    if (smallScreen) {
      setIsVisible(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        {isVisible && <Sidebar hideChat={hideChat} smallScreen={smallScreen} />}
        <Chat isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </div>
  );
};

export default Home;
