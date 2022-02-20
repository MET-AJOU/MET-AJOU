import { useNavigate } from "react-router-dom";
import { RouterProps } from "@Type/.";

const PublicRoute = ({ component: Component }: RouterProps) => {
  const user = false;
  const navigator = useNavigate();
  if (user) navigator("/map");
  return <Component />;
};

export default PublicRoute;
