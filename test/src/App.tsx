import { Switch } from "react-router-dom";
import PublicRoute from "@Routes/PublicRoute";
import PrivateRoute from "@Routes/PrivateRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login.jsx";
import MapPage from "@Pages/Map";
import TestPage from "@Pages/Test";
import TestPage2 from "@Pages/Test2";

const App = () => {
    return (
        <Switch>
            <PublicRoute path="/" component={MainPage} exact />
            <PublicRoute path="/login" component={LoginPage} exact />
            <PrivateRoute path="/map" component={MapPage} exact />
            <PrivateRoute path="/map1" component={TestPage} exact />
            <PrivateRoute path="/map2" component={TestPage2} exact />
        </Switch>
    );
};

export default App;
