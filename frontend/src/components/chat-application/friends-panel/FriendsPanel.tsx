import React, { FC, useEffect, useState } from 'react';
import FriendView from './friend-view/FriendView';
import Line from '../../utils/line/Line';
import { socketUtil } from '../../../utils/socket-utils';
import { chatService } from '../../../services/chatService/chatService';

type FriendsPanelProps = {
    className: string;
}

export interface IFriend{
    name:string;
    id:string;
}


const FriendsPanel: FC<FriendsPanelProps> = (props) => {
    const [friends, setFriends] = useState<IFriend[]>([])

    useEffect(() => {
        let updatedFriends: any[] = [];

        const updateFriendsState = ((friendsRes: any) => {
            if(friendsRes.length || friendsRes.name){
                setFriends((friends: any[]) => {
                    if(friendsRes.length){
                        updatedFriends = [...friends, ...friendsRes];
                    }
                    else if(friendsRes.name){
                        updatedFriends = [...friends, friendsRes];
                    }
                    return updatedFriends;
                });
            }
        })

        const deleteFriendFromState = (i_Friend:IFriend) =>{
            setFriends(() => {
                return updatedFriends.filter(friend=>friend.id !== i_Friend.id)
            });
        }
        
        chatService.getConnectedUsers().then(updateFriendsState);
        
        socketUtil.getSocket().on('newUser', updateFriendsState);
        socketUtil.getSocket().on('friendDisconnected', deleteFriendFromState);
    }, []);
    
    return (
        <div className={props.className}>
            <Line horizontal />
            {friends.map((friend) => 
                <div key={friend.id}><FriendView name={friend.name} isFriendView={friend.id !== socketUtil.getUserId()}></FriendView>
                <Line horizontal /></div>
            )}
        </div>
    );
}

export default FriendsPanel;