import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, exact }) => {
    const user = true;

    return <Route exact={exact} path={path} render={() => (user ? <Component /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
