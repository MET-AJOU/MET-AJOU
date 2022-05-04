/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const checkBoxCheck = (refs: any) => {
  if (refs?.current.length === 0) return "";
  for (const ref of refs.current) {
    if (!ref.checked) return "";
  }
  return "success";
};
