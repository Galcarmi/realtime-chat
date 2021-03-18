import axios from "axios";
const serverPath = "http://localhost:8000";

export async function getFromServer(url: string): Promise<any> {
  try {
    const res = await axios.get(`${serverPath}${url}`);

    return res;
  } catch (e) {
    return e.message;
  }
}
