import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { TitleText } from '../../../../components/typograph'
import { useDataCompany } from '../../../../contexts/companyContext'
import { Button, ContentInputs, Form, Input, TextArea } from './styled'

const createVacanciesFormSchema = zod.object({
  name_vacancies: zod.string().min(1, 'Por gentileza, Digite o Nome da vaga'),
  number_of_vacancies: zod
    .string()
    .min(1, 'Por gentileza, Digite a quantidade de Vagas'),
  job_description: zod.string().min(1, 'Por gentileza, Descreva a vaga'),
  vacancy_requirements: zod.string().min(1, 'Por gentileza, Descreva'),
  additional_information: zod.string().min(1, 'Por gentileza, Descreva'),
})

type createVacanciesFormInputs = zod.infer<typeof createVacanciesFormSchema>

export const CreateVacancy = () => {
  const { createNewVacancies } = useDataCompany()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createVacanciesFormInputs>({
    resolver: zodResolver(createVacanciesFormSchema),
  })

  const handlecreateVacancy = (data: createVacanciesFormInputs) => {
    createNewVacancies(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handlecreateVacancy)}>
      <TitleText color="input" weight={600} size="s">
        Adicionar Vagas
      </TitleText>
      <ContentInputs>
        <div>
          <Input
            type="text"
            placeholder="Nome da vaga"
            {...register('name_vacancies')}
            error={errors.name_vacancies?.message}
          />
          <Input
            type="text"
            placeholder="Quantidade de Vagas"
            {...register('number_of_vacancies')}
            error={errors.number_of_vacancies?.message}
          />
        </div>

        <TextArea
          placeholder="Descrição da Vaga"
          {...register('job_description')}
          error={errors.job_description?.message}
        />

        <TextArea
          placeholder="Requisitos da vaga"
          {...register('vacancy_requirements')}
          error={errors.vacancy_requirements?.message}
        />
        <TextArea
          placeholder="Vantagens da vaga"
          {...register('additional_information')}
          error={errors.additional_information?.message}
        />
      </ContentInputs>

      <Button type="submit">Enviar Dados</Button>
    </Form>
  )
}
