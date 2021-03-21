import { IFriend } from "./friend/IFriend";

export interface IFriendsManager {
  m_Friends:IFriend[];
  getAllConnectedFriends():IFriend[];
  addFriend(i_Friend:IFriend):void;
  deleteFriend(i_Friend:IFriend):void;
  notifyChannelOnNewFriend(i_FriendName:string):void;
  notifyChannelOnFriendDisconnected(i_FriendName:string):void;
}
