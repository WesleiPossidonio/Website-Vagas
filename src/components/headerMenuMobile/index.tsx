import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import Logo from '../../assets/Logo.png'
import { ContainerMenuMobile, ContainerMenus, LinkNav } from './styled'

export const HeaderHomeMobile = () => {
  const [stateBackgroundHeader, setStateBackgroundHeader] =
    useState<boolean>(false)

  const [displayMenu, setDisplayMenu] = useState(false)

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

  const handleStateMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  const handleNavigateLogin = () => {
    navigate('/login')
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <ContainerMenuMobile stateHeader={stateBackgroundHeader}>
        <img src={Logo} alt="" />
        <List size={32} onClick={handleStateMenu} />
      </ContainerMenuMobile>

      {displayMenu && (
        <ContainerMenus>
          <X size={32} onClick={handleStateMenu} />
          <LinkNav>
            <Link to="home" smooth={true} onClick={handleStateMenu}>
              Home
            </Link>
          </LinkNav>
          <LinkNav>
            <Link to="about-me" smooth={true} onClick={handleStateMenu}>
              Sobre Nós
            </Link>
          </LinkNav>
          <LinkNav>
            <Link to="meetings" smooth={true} onClick={handleStateMenu}>
              Reuniões
            </Link>
          </LinkNav>
          <LinkNav>
            <Link to="contact" smooth={true} onClick={handleStateMenu}>
              Contato
            </Link>
          </LinkNav>
          <LinkNav onClick={handleNavigateLogin}>Empresas</LinkNav>
        </ContainerMenus>
      )}
    </>
  )
}
