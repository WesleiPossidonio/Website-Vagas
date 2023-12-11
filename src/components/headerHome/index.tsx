import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import Logo from '../../assets/Logo.png'
import { ContentNav, Header, LinkNav } from './atyled'

export const HeaderHome = () => {
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 50) {
        setStateBackgroundHeader(true)
      } else {
        setStateBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigateLogin = () => {
    navigate('/login')
  }

  return (
    <Header stateHeader={stateBackgroundHeader}>
      <Link to="home" smooth={true}>
        <img src={Logo} alt="" />
      </Link>

      <ContentNav>
        <LinkNav>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </LinkNav>
        <LinkNav>
          <Link to="about-me" smooth={true}>
            Sobre Nós
          </Link>
        </LinkNav>
        <LinkNav>
          <Link to="meetings" smooth={true}>
            Reuniões
          </Link>
        </LinkNav>
        <LinkNav>
          <Link to="contact" smooth={true}>
            Contato
          </Link>
        </LinkNav>
        <LinkNav onClick={handleNavigateLogin}>Empresas</LinkNav>
      </ContentNav>
    </Header>
  )
}
