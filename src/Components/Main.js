import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import EndAdminDashboard from "./Dashboard/EndAdminDashboard/EndAdminDashboard";
import GolfDashboard from "./Dashboard/GolfDashboard/GolfDashboard";
import SiteSeeingAuthorityDashboard from "./Dashboard/SiteSeeingAuthorityDashboard/SiteSeeingAuthorityDashboard";
import TravelDashboard from "./Dashboard/TravelDashboard/TravelDashboard";
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard";
import RegisterAdmin from "./Auth/Register/RegisterAdmin";
import Lorem from "./Home/Sample/Lorem";
import Lorem2 from "./Home/Sample/Lorem2";
import Footer from "./Home/Footer/Footer";
import LandingPage from "./Home/Landing/LandingPage";
import LoginUser from "./Auth/Login/LoginUser";

const Main = () => (
  <>
    {/* <EndAdminDashboard/> */}
    {/* <GolfDashboard/> */}
    {/* <SiteSeeingAuthorityDashboard /> */}
    {/* <TravelDashboard/> */}
    {/* <UserDashboard /> */}
    {/* <RegisterAdmin/> */}

    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route path="/userlogin" element={<LoginUser/>}></Route>
      <Route path="/adminlogin" element={<LoginUser/>}></Route>
      <Route path="/lorem" element={<Lorem/>}></Route>
      <Route path="/lorem2" element={<Lorem2/>}></Route>
    </Routes>
  </>
);

export default Main;
