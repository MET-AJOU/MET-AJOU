import { Switch } from "react-router-dom";
import PublicRoute from "@Routes/PublicRoute";
import PrivateRoute from "@Routes/PrivateRoute";
import LoginPage from "@Pages/Login.jsx";
import MapPage from "@Pages/Map";
import TestPage from "@Pages/Test";

const App = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrivateRoute path="/map" component={MapPage} exact />
      <PrivateRoute path="/map2" component={TestPage} exact />
    </Switch>
  );
};

export default App;
