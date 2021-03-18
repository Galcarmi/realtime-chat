import { getFromServer } from "../../utils/axios-utils";

class MessageService {
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
}

export const messageService = new MessageService();
