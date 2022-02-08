import { Switch } from "react-router-dom";
import PublicRoute from "@Routes/PublicRoute";
import PrivateRoute from "@Routes/PrivateRoute";
import LoginPage from "@Pages/Login.jsx";
import MapPage from "@Pages/Map";

const App = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrivateRoute path="/map" component={MapPage} exact />
    </Switch>
  );
};

export default App;
