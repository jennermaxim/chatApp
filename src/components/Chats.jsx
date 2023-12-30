import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Profile from "../img/profile.avif";

const Chats = ({ hideChat, smallScreen }) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [imgError, setImgError] = useState({});

  // const [screen, setScreen] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreen(window.innerWidth <= 480);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleSelectUser = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleSelect = (u) => {
    if (smallScreen) {
      hideChat();
    }

    handleSelectUser(u);
  };

  const handleImgError = (userId) => {
    setImgError((prevErrors) => ({
      ...prevErrors,
      [userId]: true,
    }));
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            {imgError[chat[1].userInfo.uid] ? (
              <img src={Profile} alt="Profile" />
            ) : (
              <img
                src={chat[1].userInfo.photoURL}
                alt="Profile"
                onError={() => handleImgError(chat[1].userInfo.uid)}
              />
            )}
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
