/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { TitleText } from '../../../../components/typograph'
import { useDataCompany } from '../../../../contexts/companyContext'
import { Button, ContentInputs, Form, Input, TextArea } from './styled'

const createVacanciesFormSchema = zod.object({
  name_coupons: zod.string().min(1, 'Por gentileza, Digite o Nome da vaga'),
  coupon_discount: zod
    .string()
    .min(1, 'Por gentileza, Digite o valor de desconto'),
  participating_product: zod
    .string()
    .min(1, 'Por gentileza, Descreva o produto participante'),
  requirements: zod
    .string()
    .min(1, 'Por gentileza, Descreva os requisitos de uso'),
  expiry_date: zod
    .string()
    .min(1, 'Por gentileza, Descreva a data de expiração do cupon'),
  coupon_img: zod.any(),
})

type createVacanciesFormInputs = zod.infer<typeof createVacanciesFormSchema>

export const CreateCoupon = () => {
  const { createNewCoupons } = useDataCompany()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createVacanciesFormInputs>({
    resolver: zodResolver(createVacanciesFormSchema),
  })

  const handlecreateVacancy = (data: createVacanciesFormInputs) => {
    const {
      coupon_img,
      expiry_date,
      requirements,
      participating_product,
      name_coupons,
      coupon_discount,
    } = data

    const newList = {
      coupon_img: coupon_img[0],
      expiry_date,
      requirements,
      participating_product,
      name_coupons,
      coupon_discount,
    }

    createNewCoupons(newList)

    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handlecreateVacancy)}>
      <TitleText color="input" weight={600} size="s">
        Adicionar Cupons
      </TitleText>
      <ContentInputs>
        <div>
          <Input
            type="text"
            placeholder="Nome do cupom"
            {...register('name_coupons')}
            error={errors.name_coupons?.message}
          />
          <Input
            type="text"
            placeholder="Valor de Desconto"
            {...register('coupon_discount')}
            error={errors.coupon_discount?.message}
          />
        </div>

        <Input
          placeholder="Data de Vencimento do Cupom"
          {...register('expiry_date')}
          error={errors.expiry_date?.message}
        />

        <TextArea
          placeholder="Produtos Participantes"
          {...register('participating_product')}
          error={errors.participating_product?.message}
        />
        <TextArea
          placeholder="Requisitos de uso"
          {...register('requirements')}
          error={errors.requirements?.message}
        />
      </ContentInputs>

      <Button type="submit">Enviar Dados</Button>
    </Form>
  )
}
