export interface DataLoginCompanies {
  cnpj: string
  password: string
}

export interface RegisterCompaniesProps {
  cnpj: string
  name_companies: string
  email: string
  company_description: string
  path_banner: string
  path_img: string
  password: string
}

export interface NewCouponsProps {
  name_coupons: string
  coupon_discount: string
  participating_product: string
  requirements: string
  expiry_date: string
  coupon_img: string
}

export interface VacanciesProps {
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
}

export interface DataCompany {
  id: number
  cnpj: string
  name_companies: string
  email: string
  company_description: string
  urlImage: string
  urlBanner: string
  token: string
}

export interface CompaniesProps {
  id: number
  cnpj: string
  name_companies: string
  email: string
  company_description: string
  urlImage: string
  urlBanner: string
}

export interface ListVacanciesProps {
  nameSearch: string
  id: number
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
  created_at: string
  vacancies: CompaniesProps
}
