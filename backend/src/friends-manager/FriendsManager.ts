import socketIo from "socket.io";
import { IFriend } from "./friend/IFriend";
import { IFriendsManager } from "./IFriendsManager";

export class FriendsManager implements IFriendsManager{
    m_Friends: IFriend[];

    constructor(private m_Socket: socketIo.Server) {
        this.m_Friends = [];
    }
      
    getAllConnectedFriends(): IFriend[] {
        return this.m_Friends;
    }
    addFriend(i_Friend: IFriend): void {
        this.m_Friends.push(i_Friend);
    }
    deleteFriend(i_Friend: IFriend): void {
        this.m_Friends = this.m_Friends.filter(friend=>friend.name !== i_Friend.name)
    }

    notifyChannelOnNewFriend(i_FriendName:string){
        this.m_Socket.emit('newUser', i_FriendName);
    }

    notifyChannelOnFriendDisconnected(i_FriendName:string){
        this.m_Socket.emit('friendDisconnected', i_FriendName);
    }
}
