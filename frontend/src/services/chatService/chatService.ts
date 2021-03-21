import axios from "axios";
import { getFromServer } from "../../utils/axios-utils";
import { MessageRequest } from "./MessageRequest";
const serverPath = "http://localhost:8000";
class ChatService {
  getOlderMessages() {
    return getFromServer("/messages").then((res) => {
      console.log(res)
      if (res && res.data) {
        return res.data;
      } else {
        return { error: "service error" };
      }
    });
  }

  async sendMessageToChannel(messageRequest: MessageRequest){
    await axios.post(`${serverPath}/message`,messageRequest)
  }

  getConnectedUsers() {
    return getFromServer("/friends").then((res) => {
      console.log(res)
      if (res && res.data) {
        return res.data;
      } else {
        return { error: "service error" };
      }
    });
  }

}

export const chatService = new ChatService();
