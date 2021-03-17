import React, {FC} from 'react';

type MessageProps = {
    content: string;
}

const Message: FC<MessageProps> = (props) => {
    return (
        <div>
            {props.content}
        </div>
    );
}

export default Message;
