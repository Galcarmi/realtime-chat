import { IMessage } from "./message/IMessage";
import { IMessageRequest } from "./message/IMessageRequest";

export interface IMessageManager {
  m_Messages:IMessage[];
  sendMessageToChannel(messageRequest : IMessageRequest): void;
  getLastXMessages(lastMessagesCount : number): IMessage[];
}
