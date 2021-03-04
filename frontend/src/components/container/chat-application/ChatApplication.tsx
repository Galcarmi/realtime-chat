import React, { FC } from 'react';
import Chat from './chat/Chat';
import FriendsPanel from './friends-panel/FriendsPanel';
const s = require('./layout.module.css');
const chatApplicationStyles = require('./chatApplication.module.css');

type ChatApplicationProps = {}

const ChatApplication : FC<ChatApplicationProps>  = (props) => {
    return (
        <div className={[s.chat_application_layout, chatApplicationStyles.chat_application].join(' ')}>
             <FriendsPanel></FriendsPanel>
             <Chat></Chat>
        </div>
    );
}

export default ChatApplication;