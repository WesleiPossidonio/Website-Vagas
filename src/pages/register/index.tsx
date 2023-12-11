import { TextRegular, TitleText } from '../../components/typograph'
import { FormRegister } from './components/FormRegister'
import {
  ContainerForm,
  ContainerLogin,
  ContainerLogo,
  ContentLogin,
} from './styled'

export const Register = () => {
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContainerLogo>
          <p>LOGO</p>
        </ContainerLogo>

        <ContainerForm>
          <TitleText size="l" weight={700}>
            Inscreva-se
          </TitleText>

          <TextRegular>
            Abençoar pessoas é semear bondade, cultivando jardins de felicidade
            no coração de cada ser.
          </TextRegular>
          <FormRegister />
        </ContainerForm>
      </ContentLogin>
    </ContainerLogin>
  )
}
