import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MapPage from "@Pages/Map";
import DebatePage from "@Pages/Debate";
import GymPage from "@Pages/Gym";
import CheckUserRoute from "@Route/CheckUserRoute";
import { CHANNEL, CHARACTER, DEBATE, GYM, MAP, NICKNAME, PRIVACY, TALK, VERIFY } from "@Constant/URL";
import TalkPage from "@Pages/Talk";

const App = () => {
  if (window.innerWidth < 768) return <MapPage />;
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
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
