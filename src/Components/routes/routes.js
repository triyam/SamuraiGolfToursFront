import React from 'react'
import { Routes, Route, Navigate, useRoutes, useParams } from 'react-router-dom'
import App from '../../App'
import Lorem from '../Home/Sample/Lorem'
import Lorem2 from '../Home/Sample/Lorem2'

import LoginUser from '../Auth/Login/LoginUser'
import RegisterAdmin from '../Auth/Register/RegisterAdmin'
import RegisterUser from '../Auth/Register/RegisterUser'
import LandingPage from '../Home/Landing/LandingPage'
import UserDashboard from '../Dashboard/UserDashboard/UserDashboard'
import LoginAdmin from '../Auth/Login/LoginAdmin'

export default function Router() {
  return useRoutes([
    {
      path: '/lorem',
      element: <Lorem />,
    },
    {
      path: '/lorem2',
      element: <Lorem2 />,
    },
    {
      path: '/home',
      element: <LandingPage />,
    },
    {
      path: '/dashboard/',
      children: [{ path: 'userDashboard', element: <UserDashboard /> }],
    },
    {
      path: '/',

      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: 'userLogin', element: <LoginUser /> },
        { path: 'adminLogin', element: <LoginAdmin /> },
        { path: 'registerUser', element: <RegisterUser /> },
        { path: 'registerAdmin', element: <RegisterAdmin /> },
      ],
    },
  ])
}
