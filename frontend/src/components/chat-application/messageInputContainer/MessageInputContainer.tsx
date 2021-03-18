import React, { FC, useState } from 'react';
import s from './messageInputContainer.module.css';
import {messageService} from '../../../services/messageService/messageService';
import { MessageRequest } from '../../../services/messageService/MessageRequest';

type MessageInputProps = {
    className?: string;
}

const Header : FC<MessageInputProps>  = (props) => {
    const [inputContent, setInputContent] = useState('');

    const handleSendMessage = () =>{
        messageService.sendMessageToChannel(new MessageRequest({
            author:'gal',
            content:inputContent,
            channel:'global'
        }))

        setInputContent('');
    }

    return (
        <div className={[props.className, s.layout].join(' ')}>
            <input type="text"  value = {inputContent} className={s.messageInput} onChange={e=>{setInputContent(e.target.value)}}></input>
            <button className={s.sendButton} onClick={handleSendMessage}>send</button>
        </div>
    );
}

export default Header;