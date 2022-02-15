import { Route, Navigate } from "react-router-dom";
import { RouterProps } from "@Type/.";

const PublicRoute = ({ component: Component }: RouterProps) => {
    const user = false;
    return <>{user ? <Navigate to="/map" /> : <Component />}</>;
};

export default PublicRoute;
