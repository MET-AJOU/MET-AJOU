import { GET_VERIFY_EMAIL } from "@Constant/URL";
import axios from "axios";

export const handleVerifyEmail = async (ajouUserId: string) => {
  const res = await axios.post(GET_VERIFY_EMAIL, {
    ajouUserId,
  });
  console.log(res);
  return !!res;
};
