import React, { FC } from 'react';
import s from './message.module.css';

type MessageProps = {
    content: string;
    friendMessage?:boolean;
    userName:string;
}

const Message: FC<MessageProps> = (props) => {
    return (
        
        <div className={s[`${props.friendMessage?'friend':'user'}MessageContainer`]}>
            <div className={s[`${props.friendMessage?'friend':'user'}Message`]}>
            <div className={s.messageAuthor}>{props.userName}</div>
                {props.content}
            </div>
        </div>
    );
}

export default Message;
