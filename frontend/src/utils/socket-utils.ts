import { io, Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
const ENDPOINT = "http://127.0.0.1:8000";

export class ChatSocketUtil {
  m_Username?: string;
  m_Socket?: Socket;
  m_UserId?: string;

  setUsername(i_Username: string) {
    this.m_Username = i_Username;
  }

  getUsername() {
    return this.m_Username;
  }

  createSocket(i_UserName?: string, i_UserId?: string) {
    if (i_UserName) this.m_Username = i_UserName;
    if (!this.m_Username) throw new Error("username is not defined!");

    if (!i_UserId) this.m_UserId = uuidv4();
    else this.m_UserId = i_UserId;

    const socketQueryOptions = { username: this.m_Username, id: this.m_UserId };
    this.m_Socket = io(ENDPOINT, {
      query: socketQueryOptions,
    });

    //todo refactor it, made a workaround for typescript
    return { socketQueryOptions, socket: this.m_Socket };
  }

  getSocket() {
    if (!this.m_Socket) {
      const { socket } = this.createSocket();
      this.m_Socket = socket;
    }

    return this.m_Socket;
  }

  getUserId() {
    return this.m_UserId;
  }
}

export const socketUtil = new ChatSocketUtil();
