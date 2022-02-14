import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, path, exact }) => {
  const user = false;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (user ? <Redirect to="/map" /> : <Component />)}
    />
  );
};

export default PublicRoute;
