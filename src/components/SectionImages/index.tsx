import { ReactNode } from 'react'

import { ContainerSectionImages } from './styled'

interface SectionProps {
  children: ReactNode
}

export const SectionImages = ({ children }: SectionProps) => {
  return <ContainerSectionImages>{children}</ContainerSectionImages>
}
