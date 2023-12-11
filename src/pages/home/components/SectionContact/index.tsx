import { WhatsappLogo } from '@phosphor-icons/react'

import { Input } from '../../../../components/input'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { Line } from '../SectionMeetings/styled'
import {
  ButtonContact,
  ContainerContact,
  ContentContact,
  ContentText,
  Form,
  SendButton,
  TextArea,
} from './styled'

export const SectionContact = () => {
  return (
    <ContainerContact id="contact">
      <TitleText size="l" color="yellow" weight={700}>
        Contatos
      </TitleText>
      <Line />

      <ContentContact>
        <ContentText>
          <TitleText size="l" color="yellow" weight={700}>
            Há alguma dúvida sobre o Projeto Realize e Mais Amor ?
          </TitleText>
          <TextRegular size="m" weight={600}>
            Entre em contato conosco <br /> pelo Whatsapp ou pelo nosso e-mail!
          </TextRegular>

          <ButtonContact>
            <WhatsappLogo size={25} />
            Whatsapp
          </ButtonContact>
        </ContentText>
        <Form action="">
          <Input type="text" placeholder="Nome" />
          <Input type="tel" placeholder="Telefone" />
          <Input type="text" placeholder="E-mail" />
          <TextArea placeholder="Escreva sua dúvida"></TextArea>
          <SendButton type="submit">Enviar</SendButton>
        </Form>
      </ContentContact>
    </ContainerContact>
  )
}
