import useCheckUser from "./useCheckUser";

const CheckUserRoute = () => {
  const Page = useCheckUser();
  if (!Page) return null;
  return <Page />;
};

export default CheckUserRoute;
