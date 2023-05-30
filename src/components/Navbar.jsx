import React from 'react'
import profile from '../img/profile.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo">Maxim Chat App</span>
        <div className="user">
            <img src={profile} alt="Profile" />
            <span>Maxim</span>
            <button onClick={()=>signOut(auth)} >Logout</button>
        </div>
    </div>
  )
}

export default Navbar