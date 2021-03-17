import React, { FC } from 'react';
import s from './message.module.css';

type MessageProps = {
    content: string;
    friendMessage?:boolean;
}

const Message: FC<MessageProps> = (props) => {
    return (
        <div className={s[`${props.friendMessage?'friend':'user'}MessageContainer`]}>
            <div className={s[`${props.friendMessage?'friend':'user'}Message`]}>
                {props.content}
            </div>
        </div>
    );
}

export default Message;
