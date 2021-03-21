import React, { FC, useState } from 'react';
import s from './messageInputContainer.module.css';
import {chatService} from '../../../services/chatService/chatService';
import { MessageRequest } from '../../../services/chatService/MessageRequest';
import StyledInput from '../../utils/input/StyledInput';
import Button from '../../utils/button/Button';

type MessageInputProps = {
    className?: string;
}

const Header : FC<MessageInputProps>  = (props) => {
    const [inputContent, setInputContent] = useState('');

    const handleSendMessage = () =>{
        chatService.sendMessageToChannel(new MessageRequest({
            author:'gal',
            content:inputContent,
            channel:'global'
        }))

        setInputContent('');
    }

    return (
        <div className={[props.className, s.layout].join(' ')}>
            <StyledInput inputContent={inputContent} onChange={e=>{setInputContent(e.target.value)}}></StyledInput>
            <Button handleClick={handleSendMessage} label="Send"></Button>
        </div>
    );
}

export default Header;