import { useNavigate } from "react-router-dom";
import { RouterProps } from "@Type/.";
import { MAP } from "@Constant/URL";

const PublicRoute = ({ component: Component }: RouterProps) => {
  const user = false;
  const navigator = useNavigate();
  if (user) navigator(MAP);
  return <Component />;
};

export default PublicRoute;
