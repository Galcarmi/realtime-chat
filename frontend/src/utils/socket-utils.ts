import { io, Socket } from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";

export class SocketUtil{
    username?: string;
    socket?:Socket;

    setUsername(i_Username:string){
        this.username = i_Username;
    }

    getSocket(){
        if(!this.username) throw new Error('username is not defined!');
        
        if(!this.socket){
            this.socket = io(ENDPOINT, {query: {username:this.username}});
        }

        return this.socket;
    }
}

export const socketUtil = new SocketUtil();




