/* eslint-disable no-alert */
import axios from "axios";

export const Request = async ({ url, body }: API_TYPE): Promise<any> => {
  try {
    const { data }: API_RES_TYPE = await axios.post(url, body);
    console.log(data);
    if (!data?.state) {
      alert(data.message);
      return false;
    }
    return data.res;
  } catch (e) {
    alert("API 통신 에러");
    return false;
  }
};

interface API_TYPE {
  url: string;
  body: object;
}

interface API_RES_TYPE {
  data: {
    state: boolean;
    message: string;
    res: object;
  };
}
