import { Navigate, Outlet } from 'react-router-dom'

import { HeaderDashboard } from '../../components/headerDashboard'

export const PrivateRoutes = () => {
  const companies = localStorage.getItem('Monetize:companiesData1.0')

  return companies ? (
    <>
      <HeaderDashboard />

      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  )
}
