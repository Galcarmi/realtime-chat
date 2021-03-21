import React, { FC, useEffect, useState } from 'react';
import Message from './message/Message';
import s from './chat.module.css';
import { chatService } from '../../../services/chatService/chatService';
import { socketUtil } from '../../../utils/socket-utils';
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
        
        chatService.getOlderMessages().then(updateMessagesState);

        socketUtil.getSocket().on("global", updateMessagesState);
    }, []);



    return (
        <div className={[props.className, s.chat].join(' ')}>
            {messages.map((message: any, i:number) => { return (<Message key={i} content={message.content}></Message>) })}
        </div>
    );
}

export default Chat;