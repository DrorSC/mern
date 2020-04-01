
import React from 'react';
import chat from './Chat.module.css'
import MessagesList from './../MessagesList/MessagesList'
function Chat() {
    return (
        <div  className={chat.chat}>
        <div className={chat.MessagesListWrapper}>
            <MessagesList></MessagesList>
        </div>
        <div className={chat.inputWrapper}  >
            <input type="text"></input>
        </div>
        </div>
    )

}

export default Chat;