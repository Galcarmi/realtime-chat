import React from 'react';
import Message from './message/Message';
import s from '../layout.module.css';

function Chat() {
    return (
        <div className={s.chat_layout}>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
        </div>
    );
}

export default Chat;