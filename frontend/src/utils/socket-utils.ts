import { io, Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
const ENDPOINT = "http://127.0.0.1:8000";

export class SocketUtil{
    m_Username?: string;
    m_Socket?:Socket;
    m_UserId?: string;

    setUsername(i_Username:string){
        this.m_Username = i_Username;
    }

    getUsername(){
        return this.m_Username;
    }

    getSocket(){
        if(!this.m_Username) throw new Error('username is not defined!');
        
        if(!this.m_Socket){
            this.m_UserId = uuidv4();
            this.m_Socket = io(ENDPOINT, {query: {username:this.m_Username, id: this.m_UserId}});
        }

        return this.m_Socket;
    }
}

export const socketUtil = new SocketUtil();




