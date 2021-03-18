import React, { FC, useEffect, useState } from 'react';
import Message from './message/Message';
import s from './chat.module.css';
import {messageService} from '../../../services/messageService/messageService';
interface ChatProps {
    className?: string;
}
const Chat: FC<ChatProps> = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        messageService.getOlderMessages().then(messagesRes=>{
            setMessages(messagesRes);
        });

    }, [])
    return (
        <div className={[props.className, s.chat].join(' ')}>
            {messages.map((message:any) => { return (<Message key={message.id} content={message.content}></Message>) })}
        </div>
    );
}

export default Chat;