import { Lightbulb, SketchLogo, Target } from '@phosphor-icons/react'
import AOS from 'aos'
import { useEffect } from 'react'

import { TextRegular, TitleText } from '../../../components/typograph'
import {
  Cards,
  ContainerCards,
  ContainerPrinciples,
  ContainerTitle,
  Line,
} from './styled'

export const SectionPrinciples = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerPrinciples>
      <ContainerTitle>
        <TitleText size="l" color="yellow" weight={700}>
          Nossos Princípios
        </TitleText>
        <Line />
      </ContainerTitle>

      <ContainerCards>
        <Cards data-aos="fade-right" data-aos-duration="1000">
          <Target size={48} weight="fill" />

          <TitleText size="m" weight="bold" color="text">
            Nossa Missão
          </TitleText>
          <TextRegular size="s" weight={600}>
            Promover ações transformadoras em prol dos empresários da Igreja
            Missionária Betesda, bem como, ações que possibilitem o suporte ao
            Projeto Mais Amor.
          </TextRegular>
        </Cards>

        <Cards data-aos="fade-up" data-aos-duration="1500">
          <Lightbulb size={48} weight="fill" />

          <TitleText size="m" weight="bold" color="text">
            Nossa Visão
          </TitleText>
          <TextRegular size="s" weight={600}>
            Fortalecer, capacitar e instruir os empresários da Igreja
            Missionária Betesta, a fim de que estes possam empreender de forma
            plena. Expandir o Reino de Deus com a semeadura da palavra. Abençoar
            o Projeto Mais Amor, levantando mantenedores para este fim.
          </TextRegular>
        </Cards>

        <Cards data-aos="fade-left" data-aos-duration="1000">
          <SketchLogo size={48} weight="fill" />

          <TitleText size="m" weight="bold" color="text">
            Nossos Valores
          </TitleText>
          <TextRegular size="s" weight={600}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas
            magni sequi reprehenderit? Cum voluptate repellendus dolorem ipsa
            iste quasi quod, a incidunt at sapiente optio recusandae pariatur
            quidem dolorum.
          </TextRegular>
        </Cards>
      </ContainerCards>
    </ContainerPrinciples>
  )
}
