import React, { FC, useState } from 'react';
import s from './messageInputContainer.module.css';
import {messageService} from '../../../services/messageService/messageService';
import { MessageRequest } from '../../../services/messageService/MessageRequest';
import StyledInput from '../../utils/input/StyledInput';

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
            <StyledInput inputContent={inputContent} onChange={e=>{setInputContent(e.target.value)}}></StyledInput>
            <button className={s.sendButton} onClick={handleSendMessage}>send</button>
        </div>
    );
}

export default Header;