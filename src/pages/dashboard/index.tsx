import {
  BriefcaseMetal,
  ClipboardText,
  ListMagnifyingGlass,
  UserCirclePlus,
} from '@phosphor-icons/react'
import { useState } from 'react'

import { NewCouponsProps } from '../../@types/types'
import { TextRegular } from '../../components/typograph'
import { useDataCompany } from '../../contexts/companyContext'
import api from '../../services/api'
import { CreateCoupon } from './components/PageCreateCoupons'
import { CreateVacancy } from './components/PageCreateVacancy'
import { ListCoupons } from './components/PageMyCoupons'
import { ListVacancy } from './components/PageMyVacancys'
import {
  BoxImageLogo,
  ContainerDashboard,
  ContainerDashbordHome,
  ContentCompany,
  ContentDashbordHome,
  ContentDataCompany,
  DataCompany,
  Image,
  LinkMenu,
  MenuDashboard,
} from './styled'

export interface ListVacancyProps {
  vacancies_id: number
  name_vacancies: string
  number_of_vacancies: string
  job_description: string
  vacancy_requirements: string
  additional_information: string
}

export interface CouponsProps extends NewCouponsProps {
  coupons_id: number
}

export const Dashboard = () => {
  const [listVacancy, setListVacancy] = useState<ListVacancyProps[]>([])
  const [listCoupons, setlistCoupons] = useState<CouponsProps[]>([])
  const [stateMenu, setStateMenu] = useState('addVacancy')

  const { dataCompany } = useDataCompany()

  const handleNavigateMenu = async (data: string) => {
    data === 'addVacancy' && setStateMenu('addVacancy')

    if (data === 'MyVacancy') {
      setStateMenu('MyVacancy')

      try {
        const listVacancies = await api.get('listVacancies')
        const { data } = listVacancies

        const myListVacancies = data.filter((list: ListVacancyProps) => {
          return list.vacancies_id === dataCompany.id
        })

        console.log(myListVacancies)

        setListVacancy(myListVacancies)
      } catch (error) {
        console.error('Erro ao obter a lista de vagas:', error)
      }
    }

    data === 'addCoupon' && setStateMenu('addCoupon')

    if (data === 'MyCoupon') {
      setStateMenu('MyCoupon')

      try {
        const listCoupons = await api.get('listCoupon')
        const { data } = listCoupons

        const myListCoupons = data.filter((list: CouponsProps) => {
          return list.coupons_id === dataCompany.id
        })
        setlistCoupons(myListCoupons)
      } catch (error) {
        console.error('Erro ao obter a lista de vagas:', error)
      }
    }
  }

  return (
    <ContainerDashboard>
      <ContainerDashbordHome>
        <MenuDashboard>
          <LinkMenu title="Adicionar Vagas">
            <UserCirclePlus
              size={32}
              weight="fill"
              onClick={() => handleNavigateMenu('addVacancy')}
            />
            <TextRegular className="addVacancy">Test</TextRegular>
          </LinkMenu>

          <LinkMenu title="Minhas Vagas">
            <BriefcaseMetal
              size={32}
              weight="fill"
              onClick={() => handleNavigateMenu('MyVacancy')}
            />
          </LinkMenu>

          <LinkMenu title="Adicionar Cupons">
            <ClipboardText
              size={32}
              weight="fill"
              onClick={() => handleNavigateMenu('addCoupon')}
            />
          </LinkMenu>

          <LinkMenu title="Meus Cupons">
            <ListMagnifyingGlass
              size={32}
              weight="fill"
              onClick={() => handleNavigateMenu('MyCoupon')}
            />
          </LinkMenu>
        </MenuDashboard>

        <ContentDashbordHome>
          <DataCompany>
            <Image src={dataCompany.urlBanner} alt="" />

            <BoxImageLogo>
              <Image src={dataCompany.urlImage} />
            </BoxImageLogo>

            <TextRegular size="m" color="input" weight={700}>
              {dataCompany.name_companies}
            </TextRegular>

            <ContentDataCompany>
              <div>
                <TextRegular>
                  {' '}
                  <strong>CNPJ:</strong> {dataCompany.cnpj}
                </TextRegular>
                <TextRegular>
                  {' '}
                  <strong>E-mail:</strong> {dataCompany.email}
                </TextRegular>
              </div>
              <TextRegular>{dataCompany.company_description}</TextRegular>
            </ContentDataCompany>
          </DataCompany>

          <ContentCompany>
            {(stateMenu === 'addVacancy' && <CreateVacancy />) ||
              (stateMenu === 'MyVacancy' && (
                <ListVacancy listVacancy={listVacancy} />
              )) ||
              (stateMenu === 'addCoupon' && <CreateCoupon />) ||
              (stateMenu === 'MyCoupon' && (
                <ListCoupons listCoupons={listCoupons} />
              ))}
          </ContentCompany>
        </ContentDashbordHome>
      </ContainerDashbordHome>
    </ContainerDashboard>
  )
}
