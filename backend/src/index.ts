import express from "express";
import { logger } from "./logger/logger";
import socketIo from "socket.io";
import * as http from "http";
import cors from "cors";
import { MessageManager } from "./message-manager/MassageManager";
import { MessageRequest } from "./message-manager/message/MessageRequest";
import { FriendsManager } from './friends-manager/FriendsManager';
import bodyParser from "body-parser";
import { handleError } from "./utils/error-utils";

const app = express();
const port = process.env.PORT || 8000;
app.set("port", port);

const httpServer = new http.Server(app);
const io = new socketIo.Server(httpServer, { cors: { origin: "*" } });

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());

const messageManager = new MessageManager(io);
const friendsManager = new FriendsManager(io);

app.get("/alive", (req: any, res: any) => {
  res.status(200).json();
});

app.post("/message", (req : express.Request, res:express.Response) => {
  try {
    const messageRequest = new MessageRequest(req.body);
    messageManager.sendMessageToChannel(messageRequest);
    res.status(200).json();
  } catch (e) {
    handleError(e, res);
  }
});

app.get("/messages", (_ : express.Request, res:express.Response) => {
  res.send(messageManager.getLastXMessages(10));
});

app.get("/friends", (_ : express.Request, res:express.Response) => {
  res.send(friendsManager.getAllConnectedFriends());
});

io.on("connection", (socket: any) => {
  const friendName = socket.handshake.query.username;
  const friendId = socket.handshake.query.id;
  const friend = {name:friendName,id:friendId};
  friendsManager.addFriend(friend);
  friendsManager.notifyChannelOnNewFriend(friend);
  console.log("friends pool", friendsManager.getAllConnectedFriends());

  socket.on("disconnecting", () => {
    friendsManager.deleteFriend(friend);
    friendsManager.notifyChannelOnFriendDisconnected(friend);
  });
});

httpServer.listen(port, () => {
  logger.info(`listening on ${port}`);
});
