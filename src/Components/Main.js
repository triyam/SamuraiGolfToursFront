import React from "react"
import EndAdminDashboard from "./Dashboard/EndAdminDashboard/EndAdminDashboard";
import GolfDashboard from "./Dashboard/GolfDashboard/GolfDashboard"
import SiteSeeingAuthorityDashboard from "./Dashboard/SiteSeeingAuthorityDashboard/SiteSeeingAuthorityDashboard"
import TravelDashboard from "./Dashboard/TravelDashboard/TravelDashboard"
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard"
import LoginAdmin from "./Auth/Login/LoginAdmin";
import RegisterAdmin from "./Auth/Register/RegisterAdmin";
import Lorem from './Home/Sample/Lorem';
import Lorem2 from './Home/Sample/Lorem2';
import Footer from './Home/Footer/Footer';


const Main = () => (
    <>  
      {/* <EndAdminDashboard/> */}
      {/* <GolfDashboard/> */}
      {/* <SiteSeeingAuthorityDashboard /> */}
      {/* <TravelDashboard/> */}
      {/* <UserDashboard /> */}
      {/* <LoginAdmin/> */}
      <RegisterAdmin/>

      <Footer />
    </>
)

export default Main
