import { GET_VERIFY_EMAIL } from "@Constant/URL";
import { Request } from "@Util/Request";

const postVerifyEmail = async (ajouUserId: string) => {
  const res = await Request({ url: GET_VERIFY_EMAIL, body: { ajouUserId } });
  return res;
};

export const handleVerifyEmail = async (ajouUserId: string) => {
  const { isEmailSended }: postVerifyEmailType = await postVerifyEmail(ajouUserId);
  return isEmailSended;
};

export interface postVerifyEmailType {
  isEmailSended: boolean;
}
