import React from "react";
import { Routes, Route, Navigate, useRoutes, useParams } from "react-router-dom";

import App from "../../App";
import Lorem from "../Home/Sample/Lorem";
import Lorem2 from "../Home/Sample/Lorem2";

export default function Router() {
  return useRoutes([
    {
      path: '/lorem',
      element: <Lorem />,
    },
    {
      path: '/lorem2',
      element: <Lorem2 />,
    }
  ])
}