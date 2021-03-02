import axios from "axios";

export const get = async (serverUrl: string) => {
  const res = await axios.get(`http://localhost:8000/${serverUrl}`);

  return res;
};
