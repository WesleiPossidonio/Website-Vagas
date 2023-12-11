import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import { TextRegular, TitleText } from '../../components/typograph'
import { FormLoginCompanies } from './coponents/FormLogin'
import {
  ContainerForm,
  ContainerLogin,
  ContainerLogo,
  ContentLogin,
} from './styled'

export const Login = () => {
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContainerLogo>
          <img src={Logo} alt="" />
        </ContainerLogo>

        <ContainerForm>
          <TextRegular
            size="s"
            weight={700}
            className="navigateHome"
            onClick={handleNavigateToHome}
          >
            Voltar
          </TextRegular>

          <TitleText size="l" weight={700}>
            Login
          </TitleText>

          <TextRegular size="m" weight={600}>
            Abençoar pessoas é semear bondade, cultivando jardins de felicidade
            no coração de cada ser.
          </TextRegular>
          <FormLoginCompanies />
        </ContainerForm>
      </ContentLogin>
    </ContainerLogin>
  )
}
