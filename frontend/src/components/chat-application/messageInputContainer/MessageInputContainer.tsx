import React, { FC } from 'react';
import s from './messageInputContainer.module.css';

type MessageInputProps = {
    className?: string;
}

const Header : FC<MessageInputProps>  = (props) => {
    return (
        <div className={[props.className, s.layout].join(' ')}>
            <input type="text" className={s.messageInput}></input>
            <button className={s.sendButton}>send</button>
        </div>
    );
}

export default Header;