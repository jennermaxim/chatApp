import React from 'react'
import profile from '../img/profile.png'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text"  placeholder="find a user" />
        </div>
        <div className="userChat">
            <img src={profile} alt="Profile" />
            <div className="userChatInfo">
                <span>Maxim</span>
            </div>
        </div>
    </div>
  )
}

export default Search