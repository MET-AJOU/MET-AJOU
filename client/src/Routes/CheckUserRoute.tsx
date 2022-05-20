import useCheckUser from "./useCheckUser";

const CheckUserRoute = () => {
  const [Page, fn] = useCheckUser();
  if (!Page) return null;
  if (fn()) return null;
  console.log(Page);
  return <Page />;
};

export default CheckUserRoute;
