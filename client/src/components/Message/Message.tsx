import React from 'react';
import { MessageDisplay } from '../../models/Message';

function Message(msg: any){
   
    return (
      <div>
       {msg.msg.content}
      </div>
    );
}

export default Message