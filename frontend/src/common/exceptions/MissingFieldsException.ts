import { WebResponseError } from "./WebResponseError";

export class MissingFieldsException extends WebResponseError{
    constructor(i_FieldsString:string){
        super(400, `there are missing fields ${i_FieldsString} for this request`)
    }
}