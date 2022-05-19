import useCheckUser from "./useCheckUser";

const CheckUserRoute = () => {
  const Page = useCheckUser();
  console.log(Page);
  if (!Page) return null;
  return <Page />;
};

export default CheckUserRoute;
