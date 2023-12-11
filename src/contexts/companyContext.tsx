/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  DataCompany,
  DataLoginCompanies,
  NewCouponsProps,
  RegisterCompaniesProps,
  VacanciesProps,
} from '../@types/types'
import api from '../services/api'

interface DataCompanyContextType {
  dataCompany: DataCompany
  HandleLoginCompanies: (data: DataLoginCompanies) => Promise<void>
  handleRegiterCompanies: (data: RegisterCompaniesProps) => Promise<void>
  createNewVacancies: (data: VacanciesProps) => Promise<void>
  createNewCoupons: (data: NewCouponsProps) => Promise<void>
}

interface DataCompanyContextProps {
  children: ReactNode
}

export const DataCompanyContext = createContext({} as DataCompanyContextType)

export const DataCompanyProvider = ({ children }: DataCompanyContextProps) => {
  const [dataCompany, setDataCompany] = useState<DataCompany>({} as DataCompany)

  const navigate = useNavigate()

  useEffect(() => {
    const dataCompanies = localStorage.getItem('Monetize:companiesData1.0')
    dataCompanies && setDataCompany(JSON.parse(dataCompanies))
  }, [])

  const HandleLoginCompanies = useCallback(
    async (data: DataLoginCompanies) => {
      const { cnpj, password } = data

      try {
        const response = await toast.promise(
          api.post('sessions', { cnpj, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Seja Bem-vindo(a)!',
            error: 'Verifique seu cnpj e senha 🤯',
          },
        )

        const { data } = response

        await localStorage.setItem(
          'Monetize:companiesData1.0',
          JSON.stringify(data),
        )

        setDataCompany(data)

        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  const handleRegiterCompanies = useCallback(
    async (data: RegisterCompaniesProps) => {
      const {
        cnpj,
        name_companies,
        email,
        company_description,
        path_banner,
        path_img,
        password,
      } = data

      try {
        const formData = new FormData()
        formData.append('cnpj', cnpj)
        formData.append('name_companies', name_companies)
        formData.append('email', email)
        formData.append('company_description', company_description)
        formData.append('password', password)
        formData.append('path_banner', path_banner)
        formData.append('path_img', path_img)

        await toast.promise(
          api.post('companies', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }),
          {
            pending: 'Verificando seus dados',
            success: 'Empresa Cadastrada!',
            error: 'Verifique seus dados e tente novamente 🤯',
          },
        )

        setTimeout(() => {
          navigate('/')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },

    [navigate],
  )

  const createNewVacancies = useCallback(
    async (data: VacanciesProps) => {
      const {
        additional_information,
        job_description,
        name_vacancies,
        number_of_vacancies,
        vacancy_requirements,
      } = data

      const newVacacies = {
        additional_information,
        job_description,
        name_vacancies,
        number_of_vacancies,
        vacancy_requirements,
        vacancies_id: dataCompany!.id,
      }

      try {
        await toast.promise(api.post('vacancies', newVacacies), {
          pending: 'Verificando seus dados',
          success: 'Vaga criada com sucesso!',
          error: 'Verifique seus dado e faça novamente! 🤯',
        })
      } catch (error) {
        console.log(error)
      }
    },
    [dataCompany],
  )

  const createNewCoupons = useCallback(
    async (data: NewCouponsProps) => {
      const { coupon_img, expiry_date, requirements, participating_product } =
        data

      try {
        const newVacacies = new FormData()
        newVacacies.append('coupon_img', coupon_img)
        newVacacies.append('coupon_img', coupon_img)
        newVacacies.append('expiry_date', expiry_date)
        newVacacies.append('requirements', requirements)
        newVacacies.append('participating_product', participating_product)
        const coupons_id = dataCompany!.id

        await toast.promise(
          api.post('vacancies', { ...newVacacies, coupons_id }),
          {
            pending: 'Verificando seus dados',
            success: 'Cupon criado com sucesso!',
            error: 'Verifique seus dado e faça novamente! 🤯',
          },
        )
      } catch (error) {
        console.log(error)
      }
    },
    [dataCompany],
  )

  return (
    <DataCompanyContext.Provider
      value={{
        dataCompany,
        HandleLoginCompanies,
        handleRegiterCompanies,
        createNewVacancies,
        createNewCoupons,
      }}
    >
      {children}
    </DataCompanyContext.Provider>
  )
}

export const useDataCompany = () => {
  const context = useContext(DataCompanyContext)
  return context
}
