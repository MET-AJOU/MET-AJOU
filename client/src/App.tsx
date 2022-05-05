import { Routes, Route } from "react-router-dom";
import PublicRoute from "@Route/PublicRoute";
import MainPage from "@Pages/Main";
import LoginPage from "@Pages/Login";
import MapPage from "@Pages/Map";
import AboutPage from "@Pages/About";
// import CheckUserRoute from "@Route/CheckUserRoute";
import { Suspense } from "react";
import RegisterPage from "@Pages/Register";
import SelectModePage from "@Pages/SelectMode";
import PrivacyPage from "@Pages/Privacy";
import NickNamePage from "@Pages/NickName";
import CharacterPage from "@Pages/Character";
import ChannelPage from "@Pages/Channel";
// import MobileView from "@Pages/Mobile";

const App = () => {
  // if (window.innerWidth < 768) return <MobileView />;
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
        <Route path="/" element={<PublicRoute component={MainPage} />} />
        <Route path="/about" element={<PublicRoute component={AboutPage} />} />
        <Route path="/selectMode" element={<PublicRoute component={SelectModePage} />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} />} />
        <Route path="/verify" element={<PublicRoute component={RegisterPage} />} />
        <Route path="/privacy" element={<PublicRoute component={PrivacyPage} />} />
        <Route path="/nickName" element={<PublicRoute component={NickNamePage} />} />
        <Route path="/character" element={<PublicRoute component={CharacterPage} />} />
        <Route path="/Channel" element={<PublicRoute component={ChannelPage} />} />
        <Route path="/map" element={<PublicRoute component={MapPage} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
