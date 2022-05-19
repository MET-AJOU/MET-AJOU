import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";
import AboutPage from "@Pages/About";
import SelectModePage from "@Pages/SelectMode";
import DebatePage from "@Pages/Debate";
import CheckUserRoute from "@Route/CheckUserRoute";

const App = () => {
  // if (window.innerWidth < 768) return <MobileView />;
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
        <Route path="/" element={<PublicRoute component={MainPage} />} />
        <Route path="/about" element={<PublicRoute component={AboutPage} />} />
        <Route path="/selectMode" element={<PublicRoute component={SelectModePage} />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} />} />
        <Route path="/verify" element={<CheckUserRoute />} />
        <Route path="/privacy" element={<CheckUserRoute />} />
        <Route path="/nickName" element={<CheckUserRoute />} />
        <Route path="/character" element={<CheckUserRoute />} />
        <Route path="/Channel" element={<CheckUserRoute />} />
        <Route path="/map" element={<PublicRoute component={MapPage} />} />
        <Route path="/debate" element={<PublicRoute component={DebatePage} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
