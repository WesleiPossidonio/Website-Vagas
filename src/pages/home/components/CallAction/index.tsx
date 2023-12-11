import AOS from 'aos'
import { useEffect } from 'react'

import { SectionImages } from '../../../../components/SectionImages'
import { TitleText } from '../../../../components/typograph'
import { Button, ContentCallAction } from './styled'

export const CallAction = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <SectionImages>
      <ContentCallAction data-aos="zoom-in" data-aos-duration="1500">
        <TitleText size="m" color="text" weight={700}>
          Quer impulsionar seu negócio e causar impacto empresárial e espiritual
          positivo? Junte-se ao Projeto Realize
        </TitleText>

        <Button>Inscreva-se</Button>
      </ContentCallAction>
    </SectionImages>
  )
}
