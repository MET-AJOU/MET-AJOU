import { APIProps } from "@Type/.";

export const API = async ({ api, data }: APIProps) => {
  try {
    const { res, status, state, message } = await api(data);
    if (status < 400) return { res, state, message };
    throw new Error(res.error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
    return false;
  }
};
