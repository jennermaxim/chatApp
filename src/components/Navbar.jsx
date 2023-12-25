import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Maxim Chat App</span>
      <div className="user">
        <div className="img-name">
          <img src={currentUser.photoURL} alt="Profile" />
          <span>{currentUser.displayName}</span>
        </div>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
