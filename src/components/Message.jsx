import React from 'react'
import Profile from "../img/profile.png"

function Message() {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src={Profile} alt="Profime" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Hello Maxim</p>
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default Message