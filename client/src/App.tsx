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
import { ABOUT, CHANNEL, CHARACTER, DEBATE, LOGIN, MAP, NICKNAME, PRIVACY, SELECTMODE, VERIFY } from "@Constant/URL";
import ChannelPage from "@Pages/Channel";

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
        <Route path={CHANNEL} element={<PublicRoute component={ChannelPage} />} />
        {/* <Route path={CHANNEL} element={<CheckUserRoute />} /> */}
        <Route path={MAP} element={<PublicRoute component={MapPage} />} />
        <Route path={DEBATE} element={<PublicRoute component={DebatePage} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
