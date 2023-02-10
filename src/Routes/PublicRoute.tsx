import { RouterProps } from "@Type/.";
import { MAP } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";

const PublicRoute = ({ component: Component }: RouterProps) => {
  const user = false;
  const nextPage = useMovePage(MAP);
  if (user) nextPage();
  return <Component />;
};

export default PublicRoute;
