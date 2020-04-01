
import React from 'react';
import messagesList from './MessagesList.module.css'
import Message from './../Message/Message'
import { MessageDisplay } from '../../models/Message';
function MessagesList() {
    const messages: MessageDisplay[] = [
        {
            UserID:1,
            content: 'a',
            createdDate: new Date()
        },
        {
            UserID:1,
            content: 'a',
            createdDate: new Date()
        }
    ]
    
    return (
        
        <div  >
        MessagesList
        {messages.map((message:MessageDisplay) => <Message msg={message}></Message>)}
        </div>
    )

}

export default MessagesList;