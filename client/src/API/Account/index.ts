import axios from "axios";

// 사용 안함
export const googleLogin = async () => {
  const { data } = await axios.get("http://172.30.1.6:8080/login/google");
  return data;
};
