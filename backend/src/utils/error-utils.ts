import express from "express";
import { WebResponseError } from "../../src/exceptions/WebResponseError";
import { logger } from "../logger/logger";

export function handleError(error: Error, res: express.Response){
    logger.error(error)
    if(error instanceof WebResponseError){
        res.status(400).json({error:error.errorMessage});
    }
    else{
        res.status(500).json({error:"INTERNAL SERVER ERROR"});
    }
}