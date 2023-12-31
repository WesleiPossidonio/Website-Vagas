import { Footer } from '../../components/footer'
import { HeaderHome } from '../../components/headerHome'
import { HeaderHomeMobile } from '../../components/headerMenuMobile'
import { CallAction } from './components/CallAction'
import { SectionHome } from './components/HomeSection'
import { SectionAbout } from './components/SectionAbout'
import { SectionContact } from './components/SectionContact'
import { SectionMeetings } from './components/SectionMeetings'
import { SectionPrinciples } from './components/SectionPrinciples'

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <HeaderHomeMobile />
      <SectionHome />
      <SectionAbout />
      <SectionPrinciples />
      <CallAction />
      <SectionMeetings />
      <SectionContact />
      <Footer />
    </>
  )
}
