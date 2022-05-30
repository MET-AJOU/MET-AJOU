import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";
import AboutPage from "@Pages/About";
import SelectModePage from "@Pages/SelectMode";
import DebatePage from "@Pages/Debate";
import GymPage from "@Pages/Gym";
import CheckUserRoute from "@Route/CheckUserRoute";
import { ABOUT, CHANNEL, CHARACTER, DEBATE, GYM, LOGIN, MAP, NICKNAME, PRIVACY, SELECTMODE, TALK, VERIFY } from "@Constant/URL";
import TalkPage from "@Pages/Talk";

const App = () => {
  // if (window.innerWidth < 768) return <MobileView />;
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
        <Route path="/" element={<PublicRoute component={MainPage} />} />
        <Route path={ABOUT} element={<PublicRoute component={AboutPage} />} />
        <Route path={SELECTMODE} element={<PublicRoute component={SelectModePage} />} />
        <Route path={LOGIN} element={<PublicRoute component={LoginPage} />} />
        <Route path={VERIFY} element={<CheckUserRoute />} />
        <Route path={PRIVACY} element={<CheckUserRoute />} />
        <Route path={NICKNAME} element={<CheckUserRoute />} />
        <Route path={CHARACTER} element={<CheckUserRoute />} />
        <Route path={CHANNEL} element={<CheckUserRoute />} />
        <Route path={MAP} element={<PublicRoute component={MapPage} />} />
        <Route path={DEBATE} element={<PublicRoute component={DebatePage} />} />
        <Route path={GYM} element={<PublicRoute component={GymPage} />} />
        <Route path={TALK} element={<PublicRoute component={TalkPage} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
