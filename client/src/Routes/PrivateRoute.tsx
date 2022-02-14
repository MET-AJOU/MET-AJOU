import { Navigate, Route } from "react-router-dom";
import { RouterProps } from "@Type/.";

const PrivateRoute = ({ component, path }: RouterProps) => {
    const user = true;
    return <Route path={path} element={user ? component : <Navigate to="/login" />} />;
};

export default PrivateRoute;
