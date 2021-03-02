import express from "express";
import { logger } from "./logger/logger";
import socketIo from "socket.io";
import * as http from "http";

const app = express();
const port = process.env.PORT || 8000;
app.set("port", port);

const httpServer = new http.Server(app);
const io = new socketIo.Server(httpServer);

app.get("/", (req: any, res: any) => {
  res.send("hi there");
});

io.on("connection", (socket: any) => {
    socket.on("message", (message: any) => {
        socket.emit("message", message);
      });
});

const server = httpServer.listen(port, () => {
  logger.info(`listening on ${port}`);
});
