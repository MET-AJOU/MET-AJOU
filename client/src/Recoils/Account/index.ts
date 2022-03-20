import { CHECK_TOKEN } from "@Constant/URL";
import axios from "axios";
import { selector } from "recoil";

export const checkUserSelector = selector({
  key: "checkUserSelector",
  get: async () => {
    const { data } = await axios.get(CHECK_TOKEN, {
      withCredentials: true,
    });

    return data;
  },
});
