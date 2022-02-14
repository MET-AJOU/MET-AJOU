import { Routes } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import PrivateRoute from "@Route/PrivateRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login.jsx";
import MapPage from "@Pages/Map";
import TestPage from "@Pages/Test";
import TestPage2 from "@Pages/Test2";

const App = () => {
    return (
        <Routes>
            <PublicRoute path="/" component={MainPage} />
            <PublicRoute path="/login" component={LoginPage} />
            <PrivateRoute path="/map" component={MapPage} />
            <PrivateRoute path="/map1" component={TestPage} />
            <PrivateRoute path="/map2" component={TestPage2} />
        </Routes>
    );
};

export default App;
