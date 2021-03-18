import React, { FC } from 'react';
import Line from '../utils/line/Line';
import Chat from './chat/Chat';
import MessageInputContainer from './messageInputContainer/MessageInputContainer';
import FriendsPanel from './friends-panel/FriendsPanel';
const s = require('./layout.module.css');
const chatApplicationStyles = require('./chatApplication.module.css');

type ChatApplicationProps = {}

const ChatApplication: FC<ChatApplicationProps> = () => {
    return (
        <div className={[s.chat_application_layout, chatApplicationStyles.chat_application].join(' ')}>
            <FriendsPanel className={s.friends_panel_layout}/>
            <Line horizontal={false} />
            <div className={s.chatContainerLayout}>
                <Chat className={s.chatLayout}/>
                <Line horizontal/>
                <MessageInputContainer className={s.messageInputContainerLayout}/>
            </div>
        </div>
    );
}

export default ChatApplication;