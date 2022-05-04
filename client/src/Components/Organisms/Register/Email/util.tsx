import { GET_VERIFY_EMAIL } from "@Constant/URL";
import axios from "axios";

export const handleVerifyEmail = async (AjouUserId: string) => {
  const res = await axios.post(
    GET_VERIFY_EMAIL,
    {
      AjouUserId,
    },
    {
      withCredentials: true,
    }
  );

  return !!res;
};
