import AOS from 'aos'
import { useEffect } from 'react'

import ImgPoster from '../../../../assets/imgVideo.jpg'
import { TextRegular, TitleText } from '../../../../components/typograph'
import {
  AboutText,
  ContainerAbout,
  ContainerImages,
  ContentImage,
  ContentText,
  Image,
  LinkAbout,
  Span,
} from './styled'

export const SectionAbout = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerAbout id="about-me">
      <ContentText data-aos="fade-right" data-aos-duration="1000">
        <TitleText size="l" color="yellow">
          O que é o <br /> <Span>Projeto Realize ?</Span>
        </TitleText>

        <AboutText>
          <TextRegular size="m">
            <strong>
              O Projeto Realize, foi criado em maio de 2023 pelo Apóstolo Vagner
              Alves
            </strong>
            , ele é uma iniciativa sem fins lucrativos voltada para beneficiar
            empresários membros da Igreja Missionária Betesda.
          </TextRegular>

          <TextRegular size="m" className="TextTwo">
            <strong>
              Seu propósito principal é capacitar, instruir e acompanhar esses
              empresários,{' '}
            </strong>{' '}
            visando promover crescimento em suas áreas de atuação.
          </TextRegular>

          <TextRegular size="m" className="TextTwo">
            <strong>
              O projeto também tem como objetivo angariar mantenedores e
              patrocinadores para o Projeto Mais Amor,{' '}
            </strong>{' '}
            visando seu crescimento e impacto positivo.
          </TextRegular>

          <LinkAbout href="#">Saiba Mais!</LinkAbout>
        </AboutText>
      </ContentText>

      <ContainerImages data-aos="fade-left" data-aos-duration="1000">
        <ContentImage data-aos="fade-up" data-aos-duration="1500">
          <Image src={ImgPoster} alt="" />
        </ContentImage>
      </ContainerImages>
    </ContainerAbout>
  )
}
