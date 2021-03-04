import React, { FC } from 'react';
import FriendView from './friend-view/FriendView';
import s from '../layout.module.css';
type FriendsPanelProps = {}

const FriendsPanel : FC<FriendsPanelProps> = () => {
    return (
        <div className={s.friends_panel_layout}>
            <FriendView></FriendView>
            <FriendView></FriendView>
            <FriendView></FriendView>
        </div>
    );
}

export default FriendsPanel;