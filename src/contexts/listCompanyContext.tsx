import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { ListVacanciesProps } from '../@types/types'
import api from '../services/api'

interface ListCompanyType {
  handleGetListVacancies: (vacancy: string) => Promise<void>
  searchVacancy: string
}

interface ListCompanyProps {
  children: ReactNode
}

export const ListCompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  const [searchVacancy, setSearchVacancy] = useState('')
  const navigate = useNavigate()

  const handleGetListVacancies = useCallback(
    async (vacancy: string) => {
      setSearchVacancy(vacancy)
      try {
        const response = await api.get('listVacancies')

        const { data } = response

        const listVacanciesSelected = data.filter((list: ListVacanciesProps) =>
          list.name_vacancies.toLowerCase().startsWith(vacancy.toLowerCase()),
        )

        navigate('/vagas', {
          state: listVacanciesSelected,
        })
      } catch (error) {
        console.error('Erro ao obter a lista de vagas:', error)
      }
    },
    [navigate],
  )

  return (
    <ListCompanyContext.Provider
      value={{ handleGetListVacancies, searchVacancy }}
    >
      {children}
    </ListCompanyContext.Provider>
  )
}

export const useListVocancies = () => {
  const context = useContext(ListCompanyContext)
  return context
}
