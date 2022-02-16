import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute component={MainPage} />} />
      <Route path="/login" element={<PublicRoute component={LoginPage} />} />
      <Route path="/map" element={<PublicRoute component={MapPage} />} />
    </Routes>
  );
};

export default App;
