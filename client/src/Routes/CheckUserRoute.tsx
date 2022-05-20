// import NickNamePage from "@Pages/NickName";
import useCheckUser from "./useCheckUser";

const CheckUserRoute = () => {
  const Page = useCheckUser();
  if (!Page) return null;
  console.log(Page);
  // const Page = NickNamePage;
  // console.log(Page);
  return <Page />;
};

export default CheckUserRoute;
