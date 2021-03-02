import express from "express";
import { createLogger } from "./logger/logger";

const logger = createLogger();
const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
