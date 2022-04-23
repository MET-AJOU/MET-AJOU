import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";
import AboutPage from "@Pages/About";
// import CheckUserRoute from "@Route/CheckUserRoute";
import { Suspense } from "react";
import RegisterPage from "@Pages/Register";
import MainModal from "@Organisms/Main/Modal";
// import MobileView from "@Pages/Mobile";

const App = () => {
  // if (window.innerWidth < 768) return <MobileView />;
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
        <Route path="/" element={<PublicRoute component={MainPage} />} />
        <Route path="/about" element={<PublicRoute component={AboutPage} />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} />} />
        <Route path="/register" element={<PublicRoute component={RegisterPage} />} />
        <Route path="/map" element={<PublicRoute component={MapPage} />} />
      </Routes>
      <MainModal />
    </Suspense>
  );
};

export default App;
