import React, { FC, useEffect, useState } from 'react';
import Message from './message/Message';
import s from './chat.module.css';
import { messageService } from '../../../services/messageService/messageService';
import { socket } from '../../../utils/socket-utils';
interface ChatProps {
    className?: string;
}


const Chat: FC<ChatProps> = (props) => {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        let updatedMessages: any[] = [];

        const updateMessagesState = ((messageRes: any) => {
            setMessages((messages: any[]) => {
                if(messageRes.length){
                    updatedMessages = [...messages, ...messageRes];
                }
                else{
                    updatedMessages = [...messages, messageRes];
                }
                return updatedMessages;
            });
        })
        
        messageService.getOlderMessages().then(updateMessagesState);

        socket.on("global", updateMessagesState);
    }, []);



    return (
        <div className={[props.className, s.chat].join(' ')}>
            {messages.map((message: any) => { return (<Message key={message.id} content={message.content}></Message>) })}
        </div>
    );
}

export default Chat;