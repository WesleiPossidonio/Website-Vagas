import { ReactNode } from 'react'

import { DataCompanyProvider } from './companyContext'
import { ListCompanyProvider } from './listCompanyContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ListCompanyProvider>
      <DataCompanyProvider>{children}</DataCompanyProvider>{' '}
    </ListCompanyProvider>
  )
}
