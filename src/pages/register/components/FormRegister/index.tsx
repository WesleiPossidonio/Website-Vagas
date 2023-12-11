/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { FileImage } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { useDataCompany } from '../../../../contexts/companyContext'
import {
  Button,
  ContainerInputsTypesFiles,
  ContainerTextRegister,
  Form,
  Input,
  InputFile,
  Label,
  TextArea,
} from './styled'

const RegisterCompaniesFormSchema = zod.object({
  cnpj: zod
    .string()
    .min(14, 'Por gentileza, Digite o Cnpj corretamente')
    .max(14, 'Por gentileza, Digite o Cnpj corretamente'),
  name_companies: zod
    .string()
    .min(1, 'Por gentileza, Digite o nome da sua empresa'),
  email: zod
    .string()
    .email('Por gentileza, digite seu E-mail corretamente')
    .min(1, 'Por gentileza, digite seu E-mail'),
  company_description: zod
    .string()
    .min(1, 'Por gentileza, digite a descrição da sua empresa'),
  path_img: zod.any(),
  path_banner: zod.any(),
  password: zod
    .string()
    .min(6, 'Por gentileza, digite sua senha corretamente')
    .max(6, 'Por gentileza, digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<
  typeof RegisterCompaniesFormSchema
>

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(RegisterCompaniesFormSchema),
  })

  const navigate = useNavigate()

  const handleNavigateLogin = () => {
    navigate('/login')
  }

  const { handleRegiterCompanies } = useDataCompany()

  const handleLoginCompanies = (data: createLoginCompaniesFormInputs) => {
    const {
      password,
      path_banner,
      path_img,
      company_description,
      email,
      name_companies,
      cnpj,
    } = data

    const newList = {
      password,
      path_banner: path_banner[0],
      path_img: path_img[0],
      company_description,
      email,
      name_companies,
      cnpj,
    }

    console.log(newList)

    handleRegiterCompanies(newList)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleLoginCompanies)}>
      <Input
        placeholder="Digite Nome da sua Empresa"
        type="text"
        {...register('name_companies')}
        error={errors.name_companies?.message}
      />
      <Input
        placeholder="Digite seu Cnpj"
        type="text"
        {...register('cnpj')}
        error={errors.cnpj?.message}
      />
      <Input
        placeholder="Digite o E-mail da sua empresa"
        type="text"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        placeholder="Digite sua senha"
        type="text"
        {...register('password')}
        error={errors.password?.message}
      />

      <ContainerInputsTypesFiles>
        <Label htmlFor="path_banner">
          <FileImage size={32} weight="thin" />
          Adicionar Banner
          <InputFile
            type="file"
            {...register('path_banner')}
            id="path_banner"
            accept="image/*"
          />
        </Label>

        <Label htmlFor="path_img">
          <FileImage size={32} weight="thin" />
          Adicionar Logo
          <InputFile
            type="file"
            {...register('path_img')}
            accept="image/*"
            id="path_img"
          />
        </Label>
      </ContainerInputsTypesFiles>

      <TextArea
        placeholder="Descreva a sua empresa"
        {...register('company_description')}
        error={errors.company_description?.message}
      />

      <Button type="submit">Entrar</Button>

      <ContainerTextRegister>
        <span>já possui conta?</span>
        <span onClick={handleNavigateLogin} className="login">
          Fazer login!
        </span>
      </ContainerTextRegister>
    </Form>
  )
}
