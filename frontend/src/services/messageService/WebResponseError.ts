export class WebResponseError extends Error{
    constructor(public errorCode:number, public errorMessage:string){
        super(errorMessage);
    }
}