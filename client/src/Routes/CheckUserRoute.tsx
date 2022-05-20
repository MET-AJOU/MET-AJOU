import useCheckUser from "./useCheckUser";

const CheckUserRoute = () => {
  const [Page, fn] = useCheckUser();
  if (!Page) return null;
  if (fn()) return null;
  return <Page />;
};

export default CheckUserRoute;
