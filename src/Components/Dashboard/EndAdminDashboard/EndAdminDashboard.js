import React from "react";

import AppHeader from "./AppHeader/AppHeader";
import AppMenu from "./AppMenu/AppMenu";
import AppDashboard from "./AppDashboard/AppDashboard";
// import Footer from "../Home/Footer/Footer";
import AppSetting from "./AppSetting/AppSetting";

const EndAdminDashboard = () => (
    <>
        <div className="wrapper">
            <AppHeader />
            <AppMenu />
            <AppDashboard />
            <AppSetting />
            {/* <Footer /> */}
        </div>
    </>
)

export default EndAdminDashboard