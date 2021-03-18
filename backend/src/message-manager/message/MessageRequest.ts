import { MissingFieldsException } from "../../exceptions/MissingFieldsException";
import { IMessageRequest } from "./IMessageRequest";

export class MessageRequest implements IMessageRequest{
    author:string;
    content:string;
    channel:string;

    constructor(reqObj:any){
        if(reqObj.author === undefined || reqObj.content === undefined || reqObj.channel === undefined){
            throw new MissingFieldsException("author:string, content:string, channel:string");
        }
        else{
            this.author = reqObj.author;
            this.content = reqObj.content;
            this.channel = reqObj.channel;
        }
    }
        
}