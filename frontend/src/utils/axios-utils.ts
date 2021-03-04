import axios from "axios";
const serverPath = "http://localhost:8000"

export async function getFromServer(url:string):Promise<any>{
    const res = await axios.get(`${serverPath}${url}`);
    
    return res;
}