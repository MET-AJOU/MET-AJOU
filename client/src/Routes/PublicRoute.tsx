import { Route, Navigate } from "react-router-dom";
import { RouterProps } from "@Type/.";

const PublicRoute = ({ component, path }: RouterProps) => {
    const user = false;
    return <Route path={path} element={user ? <Navigate to="/map" /> : component} />;
};

export default PublicRoute;
