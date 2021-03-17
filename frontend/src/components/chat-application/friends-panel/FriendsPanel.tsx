import React, { FC } from 'react';
import FriendView from './friend-view/FriendView';
import Line from '../../utils/line/Line';
type FriendsPanelProps = {
    className: string;
}

const FriendsPanel : FC<FriendsPanelProps> = (props) => {
    return (
        <div className={props.className}>
            <FriendView name="gal"></FriendView>
            <Line horizontal/>
            <FriendView name="ido"></FriendView>
            <Line horizontal/>
            <FriendView name="or"></FriendView>
        </div>
    );
}

export default FriendsPanel;