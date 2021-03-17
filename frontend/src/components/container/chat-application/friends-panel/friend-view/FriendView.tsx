import React, {FC} from 'react';
import s from './friendView.module.css';

interface FriendViewProps {
    name:string;
}

const FriendView:FC<FriendViewProps> = (props) =>{
    return (
        <div className={s.friendView}>
            {props.name}
        </div>
    );
}

export default FriendView;