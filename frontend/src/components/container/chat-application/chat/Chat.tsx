import React from 'react';
import Message from './message/Message';
import s from '../layout.module.css';

function Chat() {
    return (
        <div className={s.chat_layout}>
            <Message content={'1sadasdasd@@'}></Message>
            <Message content={'2asdasd asdascxzc adfqeqwe fdsfd a'} friendMessage={true}></Message>
            <Message content={'3asdasd qwe as xzv svsd fad asdsad as'}></Message>
            <Message content={'4 asd adfqed asc adf 1!!'}></Message>
        </div>
    );
}

export default Chat;