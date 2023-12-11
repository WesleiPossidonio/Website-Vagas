import logo from '../../assets/Logo.png'
import { TextRegular, TitleText } from '../typograph'
import { ContainerFooter, ContentLink } from './styled'

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLink>
        <img src={logo} alt="" />
        <TextRegular>Desenvolvido por Weslei França</TextRegular>
      </ContentLink>

      <ContentLink>
        <TitleText color="yellow" weight={600}>
          Navegação
        </TitleText>
        <TextRegular weight={600}>Home</TextRegular>
        <TextRegular weight={600}>Sobre Nós</TextRegular>
        <TextRegular weight={600}>Reuniões</TextRegular>
        <TextRegular weight={600}>Contato</TextRegular>
        <TextRegular weight={600}>Empresas</TextRegular>
      </ContentLink>

      <ContentLink>
        <TitleText color="yellow" weight={600}>
          Contatos
        </TitleText>
        <a href="tel:+">Tel: +55 22 999999999</a>
        <a href="mailto:">E-mail: example.gmail.com</a>
      </ContentLink>
    </ContainerFooter>
  )
}
