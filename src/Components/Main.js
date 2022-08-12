import React from "react"
import EndAdminDashboard from "./Dashboard/EndAdminDashboard/EndAdminDashboard";
import GolfDashboard from "./Dashboard/GolfDashboard/GolfDashboard"
import SiteSeeingAuthorityDashboard from "./Dashboard/SiteSeeingAuthorityDashboard/SiteSeeingAuthorityDashboard"
import TravelDashboard from "./Dashboard/TravelDashboard/TravelDashboard"
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard"
import RegisterAdmin from "./Auth/Register/RegisterAdmin";
import LoginUser from "./Auth/Login/LoginUser"
import Lorem from './Home/Sample/Lorem';
import Lorem2 from './Home/Sample/Lorem2';
import Footer from './Home/Footer/Footer';
import Navbar from './Home/Navbar/Navbar'


const Main = () => (
    <>  
      {/* <EndAdminDashboard/> */}
      {/* <GolfDashboard/> */}
      {/* <SiteSeeingAuthorityDashboard /> */}
      {/* <TravelDashboard/> */}
      {/* <UserDashboard /> */}
      {/* <RegisterAdmin/> */}
      {/* <LoginUser/> */}
      <LoginUser/>
      <Footer />
    </>
)

export default Main
