import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import PrivateRoute from "@Route/PrivateRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";
import TestPage from "@Pages/Test";
import TestPage2 from "@Pages/Test2";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute component={MainPage} />} />
            <Route path="/login" element={<PublicRoute component={LoginPage} />} />
            <Route path="/map" element={<PublicRoute component={MapPage} />} />
            <Route path="/map1" element={<PrivateRoute component={TestPage} />} />
            <Route path="/map2" element={<PrivateRoute component={TestPage2} />} />
        </Routes>
    );
};

export default App;
