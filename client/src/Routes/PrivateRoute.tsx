import { Navigate, Route } from "react-router-dom";
import { RouterProps } from "@Type/.";

const PrivateRoute = ({ component: Component }: RouterProps) => {
    const user = true;
    return <>{user ? <Component /> : <Navigate to="/login" />} </>;
};

export default PrivateRoute;
