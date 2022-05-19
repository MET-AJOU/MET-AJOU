/* eslint-disable consistent-return */
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
    return data.data;
  } catch (e) {
    alert("API 통신 에러");
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
    data: object;
  };
}
