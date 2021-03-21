import express from "express";
import { logger } from "../logger/logger";
import { WebResponseError } from "../../../common/exceptions/WebResponseError";

export function handleError(error: Error, res?: express.Response) {
  logger.error(error);
}

export function handleRestError(error: Error, res?: express.Response) {
  logger.error(error);
  if (error instanceof WebResponseError) {
    res.status(400).json({ error: error.errorMessage });
  } else {
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
}
