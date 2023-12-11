import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import RealizeVideo from '../../../../assets/VideoRealize.mp4'
import { Input } from '../../../../components/input'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { useListVocancies } from '../../../../contexts/listCompanyContext'
import { Button, ContainerSection, Video, ContainerText, Form } from './styled'
import 'aos/dist/aos.css'

const listVacanciesFormSchema = zod.object({
  vacancy: zod.string().min(1, 'Por gentileza digite a vaga'),
})

type listVacancyFormInput = zod.infer<typeof listVacanciesFormSchema>

export const SectionHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<listVacancyFormInput>({
    resolver: zodResolver(listVacanciesFormSchema),
  })

  const { handleGetListVacancies } = useListVocancies()

  const handleGetVacancies = async (ListVacancy: listVacancyFormInput) => {
    const { vacancy } = ListVacancy
    handleGetListVacancies(vacancy)
    reset()
  }

  return (
    <ContainerSection id="home">
      <Video src={RealizeVideo} autoPlay muted loop />

      <ContainerText>
        <TitleText size="m" weight={600} color="yellow">
          Pesquise por vagas
        </TitleText>

        <TextRegular size="s">Busque uma vaga da sua área</TextRegular>

        <Form onSubmit={handleSubmit(handleGetVacancies)}>
          <Input
            type="search"
            placeholder="Buscar Vagas"
            {...register('vacancy')}
            error={errors.vacancy?.message}
          />
          <Button type="submit">Buscar</Button>
        </Form>
      </ContainerText>
    </ContainerSection>
  )
}
