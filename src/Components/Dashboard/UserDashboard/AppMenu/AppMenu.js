import React from "react";

import AppMenuHeader from "./AppMenuHeader";
import AppMenuProfile from "./AppMenuProfile";
import AppMenuOption from "./AppMenuOption";

const AppMenu = () => (
  <>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <AppMenuHeader />


      <div className="sidebar">

        <AppMenuProfile />
        <AppMenuOption />

      </div>
    </aside>
  </>
)

export default AppMenu