import React, { FC } from 'react';
import s from './messageInputContainer.module.css';
import {messageService} from '../../../services/messageService/messageService';
import { MessageRequest } from '../../../services/messageService/MessageRequest';

type MessageInputProps = {
    className?: string;
}

const Header : FC<MessageInputProps>  = (props) => {
    return (
        <div className={[props.className, s.layout].join(' ')}>
            <input type="text" className={s.messageInput}></input>
            <button className={s.sendButton} onClick={()=>{messageService.sendMessageToChannel(new MessageRequest({
                author:'gal',
                content:'carmi',
                channel:'global'
            }))}}>send</button>
        </div>
    );
}

export default Header;