import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { ListVacanciesProps } from '../../@types/types'
import ImageError from '../../assets/ImageErrorVacancy.svg'
import { Input } from '../../components/input'
import { TextRegular, TitleText } from '../../components/typograph'
import { useListVocancies } from '../../contexts/listCompanyContext'
import { Button } from '../home/components/HomeSection/styled'
import {
  CardVacancies,
  ContainerListVacancies,
  ContainerVacancies,
  ContentCard,
  ContentData,
  ContentDataVacancies,
  ContentVacancies,
  FooterCard,
  HeaderCard,
  HeaderVacancies,
} from './styled'

interface LocationProps {
  state: ListVacanciesProps[]
}

const listVacanciesFormSchema = zod.object({
  vacancy: zod.string().min(1, 'Por gentileza digite a vaga'),
})

type listVacancyFormInput = zod.infer<typeof listVacanciesFormSchema>

export const PageVacancies = () => {
  const { state } = useLocation() as unknown as LocationProps
  const { searchVacancy, handleGetListVacancies } = useListVocancies()

  const [listVacancies, setListVacancies] = useState<ListVacanciesProps[]>([])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<listVacancyFormInput>({
    resolver: zodResolver(listVacanciesFormSchema),
  })

  const handleGetVacancies = async (ListVacancy: listVacancyFormInput) => {
    const { vacancy } = ListVacancy
    handleGetListVacancies(vacancy)
    reset()
  }

  const addLocalStorage = async () => {
    if (state !== null) {
      await localStorage.setItem(
        'Vacancies:Vacancies1.0',
        JSON.stringify(state),
      )
    }
  }

  useEffect(() => {
    const dataVancacy = localStorage.getItem('Vacancies:Vacancies1.0')
    const parsedData = dataVancacy && JSON.parse(dataVancacy)

    if (!parsedData) {
      addLocalStorage()
    }

    if (state === null) {
      setListVacancies(parsedData)
    } else if (state !== parsedData) {
      setListVacancies(state)
      addLocalStorage()
    } else {
      setListVacancies(state)
    }
  }, [state])

  const handleSelectedVacancies = (id: number) => {
    const listSelected = listVacancies.filter((list) => list.id === id)

    console.log('cheguei')
    navigate('/inscricão', {
      state: listSelected,
    })
  }

  const handleToGoBackHome = () => {
    navigate('/')
  }

  console.log(searchVacancy)

  return (
    <ContainerVacancies>
      <HeaderVacancies>
        <TitleText>Logo</TitleText>
        <TextRegular weight={600} onClick={handleToGoBackHome}>
          Voltar a Home
        </TextRegular>
      </HeaderVacancies>

      {listVacancies && listVacancies.length < 1 ? (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText>{searchVacancy}</TitleText>
              <TextRegular color="text" weight={700} size="l">
                Vaga Não Encontrada
              </TextRegular>
            </ContentVacancies>

            <form onSubmit={handleSubmit(handleGetVacancies)}>
              <Input
                type="search"
                placeholder="Buscar Vagas"
                {...register('vacancy')}
                error={errors.vacancy?.message}
                vacancies={true}
              />
              <Button className="btn">Buscar</Button>
            </form>
          </ContentDataVacancies>

          <img src={ImageError} alt="" />
        </ContentData>
      ) : (
        <ContentData>
          <ContentDataVacancies>
            <ContentVacancies>
              <TitleText>{searchVacancy}</TitleText>
              <TextRegular>
                {listVacancies && listVacancies.length} Vagas Encontradas
              </TextRegular>
            </ContentVacancies>

            <form onSubmit={handleSubmit(handleGetVacancies)}>
              <Input
                type="search"
                placeholder="Buscar Vagas"
                {...register('vacancy')}
                error={errors.vacancy?.message}
                vacancies={true}
              />
              <Button>Buscar</Button>
            </form>
          </ContentDataVacancies>

          <ContainerListVacancies>
            {listVacancies &&
              listVacancies.map((list) => {
                return (
                  <CardVacancies
                    key={list.id}
                    onClick={() => handleSelectedVacancies(list.id)}
                  >
                    <HeaderCard>
                      <img src={list.vacancies.urlImage} alt="" />
                      <TextRegular size="m" color="text" weight={700}>
                        {list.vacancies.name_companies}
                      </TextRegular>
                    </HeaderCard>

                    <ContentCard>
                      <TextRegular size="l" weight={600}>
                        {list.name_vacancies}
                      </TextRegular>
                      <div>
                        <TextRegular color="yellow" weight={600}>
                          {list.number_of_vacancies} Vagas
                        </TextRegular>
                        <TextRegular weight={600}>Macaé-RJ</TextRegular>
                      </div>
                    </ContentCard>

                    <FooterCard>
                      <TextRegular>Pubicada há 10 dias</TextRegular>
                    </FooterCard>
                  </CardVacancies>
                )
              })}
          </ContainerListVacancies>
        </ContentData>
      )}
    </ContainerVacancies>
  )
}
