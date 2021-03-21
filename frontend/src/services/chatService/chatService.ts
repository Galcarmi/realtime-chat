import { getFromServer } from "../../utils/axios-utils";
class ChatService {
  getOlderMessages() {
    return getFromServer("/messages").then((res) => {
      if (res && res.data) {
        return res.data;
      } else {
        return { error: "service error" };
      }
    });
  }

  getConnectedUsers() {
    return getFromServer("/friends").then((res) => {
      if (res && res.data) {
        return res.data;
      } else {
        return { error: "service error" };
      }
    });
  }

}

export const chatService = new ChatService();
