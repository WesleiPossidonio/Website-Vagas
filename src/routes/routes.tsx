import { Routes, Route } from 'react-router-dom'

import { AboutRealize } from '../pages/AboutRealize'
import { Dashboard } from '../pages/dashboard'
import { Home } from '../pages/home'
import { PageVacancies } from '../pages/listVacancies'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { Vacancies } from '../pages/vacancies'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/inscreva-se" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/vagas" element={<PageVacancies />} />
      <Route path="/inscricão" element={<Vacancies />} />
      <Route path="/sobre-nos" element={<AboutRealize />} />

      <Route path="/dashboard" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
