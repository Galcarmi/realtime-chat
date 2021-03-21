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
            console.log('ressss', friendsRes)
            setFriends((friends: any[]) => {
                if(friendsRes.length && ! (typeof(friendsRes) === 'string')){
                    updatedFriends = [...friends, ...friendsRes];
                }
                else{
                    updatedFriends = [...friends, friendsRes];
                }
                return updatedFriends;
            });
        })

        const deleteFriendFromState = (friendName:string) =>{
            setFriends(() => {
                return updatedFriends.filter(friend=>friend !== friendName)
            });
        }
        
        chatService.getConnectedUsers().then(updateFriendsState);
        
        socketUtil.getSocket().on('newUser', updateFriendsState);
        socketUtil.getSocket().on('friendDisconnected', deleteFriendFromState);
    }, []);
    return (
        <div className={props.className}>
            {friends.map((friend) => 
                <div key={friend.id}><FriendView name={friend.name}></FriendView>
                <Line horizontal /></div>
            )}
        </div>
    );
}

export default FriendsPanel;