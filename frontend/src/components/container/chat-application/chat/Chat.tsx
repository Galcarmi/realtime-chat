import React, {FC} from 'react';
import Message from './message/Message';

interface ChatProps {
    className?: string;
}
const Chat:FC<ChatProps> = (props) => {
    return (
        <div className={props.className}>
            <Message content={'1sadasdasd@@'}></Message>
            <Message content={'2asdasd asdascxzc adfqeqwe fdsfd a'} friendMessage={true}></Message>
            <Message content={'3asdasd qwe as xzv svsd fad asdsad as'}></Message>
            <Message content={'4 asd adfqed asc adf 1!!'}></Message>
        </div>
    );
}

export default Chat;