import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { useDataCompany } from '../../../../contexts/companyContext'
import { Button, Form, Input, TextRegister } from './styled'

const loginCompaniesFormSchema = zod.object({
  cnpj: zod
    .string()
    .min(14, 'Por gentileza, Digite o Cnpj corretamente')
    .max(14, 'Por gentileza, Digite o Cnpj corretamente'),
  password: zod
    .string()
    .min(6, 'Favor digite sua senha corretamente')
    .max(6, 'Favor digite sua senha corretamente'),
})

type createLoginCompaniesFormInputs = zod.infer<typeof loginCompaniesFormSchema>

export const FormLoginCompanies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createLoginCompaniesFormInputs>({
    resolver: zodResolver(loginCompaniesFormSchema),
  })

  const { HandleLoginCompanies } = useDataCompany()

  const handleLoginCompanies = (data: createLoginCompaniesFormInputs) => {
    HandleLoginCompanies(data)
    reset()
  }

  const navigate = useNavigate()

  const handleNavigateSigUp = () => {
    navigate('/inscreva-se')
  }

  return (
    <Form onSubmit={handleSubmit(handleLoginCompanies)}>
      <Input
        placeholder="Digite seu Cnpj"
        type="text"
        {...register('cnpj')}
        error={errors.cnpj?.message}
      />
      <Input
        placeholder="Digite sua senha"
        type="text"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit">Entrar</Button>

      <TextRegister>
        <span>Novo Usuário?</span>
        <span onClick={handleNavigateSigUp} className="signUp">
          Increva-se Agora!
        </span>
      </TextRegister>
    </Form>
  )
}
