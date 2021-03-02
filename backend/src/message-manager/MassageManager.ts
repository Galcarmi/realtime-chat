import { IMessageManager } from "./IMessageManager";

export class MessageManager implements IMessageManager {
    sendMessageToChannel(message: string, channel: string): void {
        throw new Error("Method not implemented.");
    }
    
}