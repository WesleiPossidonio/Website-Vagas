import AOS from 'aos'
import { useEffect, useState } from 'react'

import {
  ListImagesMaisAmor,
  ListImagesRealize,
} from '../../../../components/ListImages'
import { TitleText } from '../../../../components/typograph'
import {
  ButtonImages,
  ContainerImagens,
  ContainerMeetings,
  ContainerTitle,
  ContainerTitleImages,
  Images,
  Line,
} from './styled'

interface ImagesProps {
  id: number
  image: string
}

export const SectionMeetings = () => {
  const [nameEvent, setNameEvent] = useState('realize')

  useEffect(() => {
    AOS.init()
  }, [])

  const handleListEventImages = (data: string) => {
    setNameEvent(data)
    AOS.init()
  }

  return (
    <ContainerMeetings id="meetings">
      <ContainerTitle>
        <TitleText size="l" color="yellow" weight={700}>
          Ultimas Reuniões
        </TitleText>
        <Line />
      </ContainerTitle>

      <ContainerTitleImages>
        <ButtonImages
          nameEvent={nameEvent === 'realize' && true}
          onClick={() => handleListEventImages('realize')}
        >
          Realise
        </ButtonImages>

        <ButtonImages
          nameEvent={nameEvent === 'maisAmor' && true}
          onClick={() => handleListEventImages('maisAmor')}
        >
          Mais Amor
        </ButtonImages>
      </ContainerTitleImages>

      {nameEvent === 'realize' ? (
        <ContainerImagens>
          {ListImagesRealize.map((list: ImagesProps) => (
            <Images
              key={list.id}
              src={list.image}
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          ))}
        </ContainerImagens>
      ) : (
        <ContainerImagens>
          {ListImagesMaisAmor.map((list: ImagesProps) => (
            <Images
              key={list.id}
              src={list.image}
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          ))}
        </ContainerImagens>
      )}
    </ContainerMeetings>
  )
}
