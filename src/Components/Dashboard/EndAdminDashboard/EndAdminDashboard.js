import React from "react";

import AppHeader from "./AppHeader/AppHeader";
import AppMenu from "./AppMenu/AppMenu";
import AppDashboard from "./AppDashboard/AppDashboard";
import AppFooter from "./AppFooter/AppFooter";
import AppSetting from "./AppSetting/AppSetting";

const EndAdminDashboard = () => (
    <>
        <div className="wrapper">
            <AppHeader />
            <AppMenu />
            <AppDashboard />
            <AppSetting />
            <AppFooter />
        </div>
    </>
)

export default EndAdminDashboard