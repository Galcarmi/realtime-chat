import { IMessageManager } from "./IMessageManager";
import socketIo from "socket.io";
import { v4 as uuidv4 } from "uuid";
import { IMessage } from "./message/IMessage";
import { IMessageRequest } from "./message/IMessageRequest";
import { IFriend } from "../friends-manager/friend/IFriend";
export class MessageManager implements IMessageManager {
  m_Messages: IMessage[];

  constructor(private m_Socket: socketIo.Server) {
    this.m_Messages = [];
  }
  sendMessageToChannel(i_MessageRequest : IMessageRequest, userDetails : IFriend): void {
    const message = {
      author: i_MessageRequest.author,
      content: i_MessageRequest.content,
      createdDate: new Date(),
      id: uuidv4(),
      userId:userDetails.id,
      userName: userDetails.name,
    }
    this.m_Messages.push(message);

    this.m_Socket.emit(i_MessageRequest.channel, message);
  }

  getLastXMessages(i_LastMessagesCount: number): IMessage[] {
    return this.m_Messages.slice(0, i_LastMessagesCount);
  }
}
