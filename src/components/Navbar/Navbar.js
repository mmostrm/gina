import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
//import { Button } from '../../globalStyles'
import {
  Nav,
  NavbarContainer,
  NavLogo,
 // NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
 // NavItemBtn,
  NavLinks,
 // NavBtnLink
} from './navbar.elements'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              GINA JOHANSEN
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/southpole' onClick={closeMobileMenu}>
                  SOUTH POLE
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/blog' onClick={closeMobileMenu}>
                  BLOG
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/adventures' onClick={closeMobileMenu}>
                  MY ADVENTURES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/sponsors' onClick={closeMobileMenu}>
                  SPONSORS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about' onClick={closeMobileMenu}>
                  ABOUT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/media' onClick={closeMobileMenu}>
                  MEDIA
                </NavLinks>
              </NavItem>
            {/*  <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink> 
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar