import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import ChangeThemeButton from './ChangeThemeButton'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      <nav className="z-50 fixed top-0 bg-white border-b border-gray-300 dark:border-none dark:bg-gray-800 backdrop-blur-md dark:bg-opacity-50 bg-opacity-25 w-full p-3 md:p-2">
        <div className="flex max-w-2xl mx-auto items-center  justify-center xs:justify-between">
          <h1 className="dark:text-white text-black text-xl font-semibold cursor-pointer">
            Pufferbommy
          </h1>
          <div className="flex gap-2">
            <ChangeThemeButton />
            <HamburgerMenu toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>
      <ul
        className={`md:hidden mt-16 text-white w-full max-h-0 ${
          isMenuOpen && 'max-h-screen'
        } overflow-hidden transition-all duration-300 h-auto bg-gray-800`}
      >
        <Link onClick={closeMenu} to="bio" smooth={true}>
          <li className="cursor-pointer tracking-widest text-center border-b border-gray-700 p-3">
            Bio
          </li>
        </Link>
        <Link onClick={closeMenu} to="skills" smooth={true}>
          <li className="cursor-pointer tracking-widest text-center border-b border-gray-700 p-3">
            Skills
          </li>
        </Link>
        <Link onClick={closeMenu} to="iLove" smooth={true}>
          <li className="cursor-pointer tracking-widest text-center border-b border-gray-700 p-3">
            I ♥
          </li>
        </Link>
        <Link onClick={closeMenu} to="onTheWeb" smooth={true}>
          <li className="cursor-pointer tracking-widest text-center border-b border-gray-700 p-3">
            On the web
          </li>
        </Link>
      </ul>
    </>
  )
}

export default Navbar
