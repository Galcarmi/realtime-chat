import React, {FC} from 'react';
import s from './friendView.module.css';

interface FriendViewProps {
    name:string;
    isFriendView:boolean;
}

const FriendView:FC<FriendViewProps> = (props) =>{
    return (
        <div className={props.isFriendView?s.friendView:s.userView}>
            {props.name}
        </div>
    );
}

export default FriendView;