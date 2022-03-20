import { Navigate } from "react-router-dom";
import { RouterProps } from "@Type/.";
import { useRecoilValue } from "recoil";
import { checkUserSelector } from "@Recoils/Account";

const CheckUserRoute = ({ component: Component }: RouterProps) => {
  const test = useRecoilValue(checkUserSelector);
  console.log(test);
  const user = false;
  return <>{user ? <Component /> : <Navigate to="/register" />} </>;
};

export default CheckUserRoute;
