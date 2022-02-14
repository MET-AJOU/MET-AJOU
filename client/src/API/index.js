export const API = async ({ api, data }) => {
  try {
    const { res, status } = await api(data);
    if (status < 400) return res;
    throw new Error(res.error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
  }
};
