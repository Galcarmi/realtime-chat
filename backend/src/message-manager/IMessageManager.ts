import { IFriend } from "../friends-manager/friend/IFriend";
import { IMessage } from "./message/IMessage";
import { IMessageRequest } from "../../../common/chat-utils/IMessageRequest";

export interface IMessageManager {
  m_Messages: IMessage[];
  sendMessageToChannel(
    messageRequest: IMessageRequest,
    userDetails: IFriend
  ): void;
  getLastXMessages(lastMessagesCount: number): IMessage[];
}
