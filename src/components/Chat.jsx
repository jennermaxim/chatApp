import React from 'react'
import Chatinfo from './Chatinfo'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
        <Chatinfo />
        <Messages />
        <Input />
    </div>
  )
}

export default Chat