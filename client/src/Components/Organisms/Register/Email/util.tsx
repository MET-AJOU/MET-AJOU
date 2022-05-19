import { POST_VERIFY_EMAIL } from "@Constant/URL";
import { Request } from "@Util/Request";

const postVerifyEmail = async (ajouUserId: string) => {
  const res = await Request({ url: POST_VERIFY_EMAIL, body: { ajouUserId } });
  return res;
};

export const handleVerifyEmail = async (ajouUserId: string) => {
  const res = await postVerifyEmail(ajouUserId);
  return res?.isEmailSended ?? false;
};
