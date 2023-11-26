import React from 'react'
import profile from '../img/profile.png'

function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo">Maxim Chat App</span>
        <div className="user">
            <img src={profile} alt="Profile" />
            <span>Maxim</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar