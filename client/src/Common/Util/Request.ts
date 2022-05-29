/* eslint-disable no-alert */
import axios from "axios";

export const Request = async ({ url, body, method }: API_TYPE): Promise<any> => {
  try {
    const request = method === "GET" ? axios.get : axios.post;
    const { data }: API_RES_TYPE = await request(url, body);

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
  body?: object;
  method?: "POST" | "GET";
}

interface API_RES_TYPE {
  data: {
    state: boolean;
    message: string;
    res: object;
  };
}

const defaultProps = {
  method: "POST",
};

Request.defaultProps = defaultProps;
